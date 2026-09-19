import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

// The streaming block was lifted out of handleChatCore into its own leaf. Unlike
// the non-streaming leg, this one does not own every exit: control can fall out
// of it and carry on down the barrel, so anything it *rebinds* has to travel
// back through `carry` and be reseated by the caller.
//
// The distinction that matters is rebinding versus mutation:
//
//   credentials  -- only ever Object.assign(credentials, ...), which writes
//                   through the parameter into the object the barrel still
//                   holds. Nothing to carry.
//   currentModel -- reassigned during model fallback. A reassignment inside the
//                   leaf rebinds the leaf's own parameter and is invisible to
//                   the barrel, so it must be carried back.
//
// Dropping a carry-back is silent. The leaf still runs, its fallback still
// picks a new model, and every suite that exercises the leaf's internals stays
// green -- the barrel just keeps using the stale value afterwards. This test
// pins the plumbing rather than the behaviour, which is the part no other test
// is looking at.
//
// Read through the TypeScript parser, not by regex: a text pattern would encode
// today's formatting and go red on a reformat that changed no behaviour.

const leafPath = new URL("../../../open-sse/handlers/chatCore/streamingLeg.ts", import.meta.url);
const barrelPath = new URL("../../../open-sse/handlers/chatCore.ts", import.meta.url);

function parse(path: URL): ts.SourceFile {
  return ts.createSourceFile(
    path.pathname,
    readFileSync(path, "utf8"),
    ts.ScriptTarget.ESNext,
    true
  );
}

/** Parameter names destructured out of the leaf's `deps` argument. */
function leafInputs(sf: ts.SourceFile): Set<string> {
  const names = new Set<string>();
  const walk = (node: ts.Node) => {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isObjectBindingPattern(node.name) &&
      ts.isIdentifier(node.initializer as ts.Node as ts.Identifier) &&
      (node.initializer as ts.Identifier).text === "deps"
    ) {
      for (const el of node.name.elements) {
        if (ts.isIdentifier(el.name)) names.add(el.name.text);
      }
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);
  return names;
}

/** Inputs the leaf reassigns (`x = ...`), i.e. rebinds its own parameter. */
function rebound(sf: ts.SourceFile, inputs: Set<string>): Set<string> {
  const hit = new Set<string>();
  const walk = (node: ts.Node) => {
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      ts.isIdentifier(node.left) &&
      inputs.has(node.left.text)
    ) {
      hit.add(node.left.text);
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);
  return hit;
}

/** Members declared on the StreamingLegCarry interface. */
function carryFields(sf: ts.SourceFile): Set<string> {
  const names = new Set<string>();
  const walk = (node: ts.Node) => {
    if (ts.isInterfaceDeclaration(node) && node.name.text === "StreamingLegCarry") {
      for (const m of node.members) {
        if (m.name && ts.isIdentifier(m.name)) names.add(m.name.text);
      }
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);
  return names;
}

/** Names the barrel reseats as `x = streamingOutcome.carry.x`. */
function reseatedByBarrel(sf: ts.SourceFile): Set<string> {
  const names = new Set<string>();
  const walk = (node: ts.Node) => {
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      ts.isIdentifier(node.left) &&
      ts.isPropertyAccessExpression(node.right) &&
      node.right.name.text === node.left.text &&
      node.right.expression.getText().endsWith("carry")
    ) {
      names.add(node.left.text);
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);
  return names;
}

/** Identifiers the barrel reads after the runStreamingLeg call statement. */
function readAfterTheCall(sf: ts.SourceFile): Set<string> {
  const line = (pos: number) => sf.getLineAndCharacterOfPosition(pos).line + 1;
  let callEnd: number | null = null;
  const findCall = (node: ts.Node) => {
    if (ts.isCallExpression(node) && node.expression.getText() === "runStreamingLeg") {
      let stmt: ts.Node = node;
      while (stmt.parent && !ts.isStatement(stmt)) stmt = stmt.parent;
      callEnd = line(stmt.getEnd());
    }
    ts.forEachChild(node, findCall);
  };
  findCall(sf);
  assert.ok(callEnd !== null, "failed to locate the runStreamingLeg call");

  const names = new Set<string>();
  const walk = (node: ts.Node) => {
    if (ts.isIdentifier(node) && line(node.getStart()) > (callEnd as number)) {
      const p = node.parent;
      const isWrite =
        ts.isBinaryExpression(p) &&
        p.left === node &&
        p.operatorToken.kind === ts.SyntaxKind.EqualsToken;
      const isDecl = ts.isVariableDeclaration(p) && p.name === node;
      const isProp = ts.isPropertyAccessExpression(p) && p.name === node;
      if (!isWrite && !isDecl && !isProp) names.add(node.text);
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);
  return names;
}

test("inputs the leg rebinds and the barrel still reads are carried back", () => {
  const leaf = parse(leafPath);
  const inputs = leafInputs(leaf);
  assert.ok(inputs.size > 10, "failed to read the leaf's destructured inputs");

  // A rebind only matters if someone downstream looks at the variable again.
  // providerUrl, for instance, is reassigned inside the leg and never read by
  // the barrel afterwards; carrying it back would suggest a data flow that does
  // not exist. Narrow to the rebinds that would actually go stale.
  const stillRead = readAfterTheCall(parse(barrelPath));
  const declared = carryFields(leaf);
  const missing = [...rebound(leaf, inputs)]
    .filter((n) => stillRead.has(n))
    .filter((n) => !declared.has(n));

  assert.deepEqual(
    missing,
    [],
    `rebound by the leg and read again by the barrel, but never carried back, so the barrel sees the pre-call value: ${missing.join(", ")}`
  );
});

test("every carry field is reseated by the barrel", () => {
  const declared = carryFields(parse(leafPath));
  assert.ok(declared.size > 0, "failed to read StreamingLegCarry");

  const reseated = reseatedByBarrel(parse(barrelPath));
  const dropped = [...declared].filter((n) => !reseated.has(n));
  assert.deepEqual(
    dropped,
    [],
    `carried back but never written back in chatCore.ts: ${dropped.join(", ")}`
  );
});

test("credentials is mutated in place, so it is deliberately not carried", () => {
  // Guards the reasoning above: if someone ever converts one of these
  // Object.assign calls into a reassignment, the first test starts demanding a
  // carry field for it -- and this one explains why it was absent until then.
  const sf = parse(leafPath);
  let assigns = 0;
  let rebinds = 0;
  const walk = (node: ts.Node) => {
    if (
      ts.isCallExpression(node) &&
      node.expression.getText() === "Object.assign" &&
      node.arguments.length > 0 &&
      node.arguments[0].getText() === "credentials"
    ) {
      assigns += 1;
    }
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      ts.isIdentifier(node.left) &&
      node.left.text === "credentials"
    ) {
      rebinds += 1;
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);

  assert.ok(assigns > 0, "expected credentials to be updated via Object.assign");
  assert.equal(
    rebinds,
    0,
    "credentials was rebound; a rebind does not reach the barrel and needs a carry field"
  );
});

test("carry() reads the live bindings, so reassignments reach the barrel", () => {
  // The checks above prove the plumbing is declared; this one pins the part that
  // makes the plumbing mean anything. A carry that snapshotted its inputs -- say
  // `const snap = { currentModel }; const carry = () => snap;` -- satisfies every
  // static check and still hands the barrel the pre-fallback values.
  //
  // Two properties together rule that out, and both are decidable from the tree:
  //
  //   1. deps is destructured with `let`. A const binding could not be reassigned
  //      at all, and the reassignments are the whole reason this leg carries state.
  //   2. the carry factory names those same bindings directly in its returned
  //      object literal, rather than returning a previously-built object.
  //
  // Shorthand `{ currentModel }` inside an arrow evaluates the binding on every
  // call, so with both properties holding, a reassignment before carry() is
  // observed by it.
  const sf = parse(leafPath);

  let depsDecl: ts.VariableDeclaration | null = null;
  let declList: ts.VariableDeclarationList | null = null;
  let carryFactory: ts.ArrowFunction | null = null;

  const walk = (node: ts.Node) => {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isObjectBindingPattern(node.name) &&
      node.initializer &&
      node.initializer.getText() === "deps"
    ) {
      depsDecl = node;
      if (ts.isVariableDeclarationList(node.parent)) declList = node.parent;
    }
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "carry" &&
      node.initializer &&
      ts.isArrowFunction(node.initializer)
    ) {
      carryFactory = node.initializer;
    }
    ts.forEachChild(node, walk);
  };
  walk(sf);

  assert.ok(depsDecl, "failed to find the deps destructure");
  assert.ok(declList, "failed to find the deps declaration list");
  assert.ok(carryFactory, "failed to find the carry factory");

  assert.ok(
    ((declList as ts.VariableDeclarationList).flags & ts.NodeFlags.Let) !== 0,
    "deps must be destructured with let; a const binding could not carry a reassignment"
  );

  // The factory must return an object literal built at call time, not a
  // previously-constructed one.
  const body = (carryFactory as ts.ArrowFunction).body;
  const literal = ts.isParenthesizedExpression(body) ? body.expression : body;
  assert.ok(
    ts.isObjectLiteralExpression(literal),
    `carry must return a fresh object literal, got: ${literal.getText().slice(0, 60)}`
  );

  // And each carried name must be the binding itself, evaluated per call.
  const bound = new Set<string>();
  const pattern = (depsDecl as ts.VariableDeclaration).name as ts.ObjectBindingPattern;
  for (const el of pattern.elements) {
    if (ts.isIdentifier(el.name)) bound.add(el.name.text);
  }

  for (const name of ["currentModel", "pipelineRecovered"]) {
    const prop = (literal as ts.ObjectLiteralExpression).properties.find(
      (pr) => pr.name?.getText() === name
    );
    assert.ok(prop, `${name} must appear on the carry literal`);
    assert.ok(
      ts.isShorthandPropertyAssignment(prop) ||
        (ts.isPropertyAssignment(prop) &&
          ts.isIdentifier(prop.initializer) &&
          prop.initializer.text === name),
      `${name} must be carried as the live binding, not a precomputed value`
    );
    assert.ok(bound.has(name), `${name} must be one of the let-bound deps`);
  }
});
