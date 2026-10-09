import { NextResponse } from "next/server";
import { z } from "zod";
import {
  deleteCompressionCombo,
  getCompressionCombo,
  setDefaultCompressionCombo,
  updateCompressionCombo,
} from "@/lib/db/compressionCombos";
import type { CompressionPipelineStep } from "@omniroute/open-sse/services/compression/types.ts";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import {
  cavemanIntensitySchema,
  stackedPipelineStepSchema,
} from "@/shared/validation/compressionConfigSchemas";

export const pipelineStepSchema = stackedPipelineStepSchema;

const STORED_STEP_INTENSITIES = [
  "lite",
  "full",
  "ultra",
  "minimal",
  "standard",
  "aggressive",
] as const;

function isStoredStepIntensity(value: string): value is (typeof STORED_STEP_INTENSITIES)[number] {
  return (STORED_STEP_INTENSITIES as readonly string[]).includes(value);
}

function toStoredPipeline(
  pipeline: z.infer<typeof compressionComboUpdateSchema>["pipeline"]
): CompressionPipelineStep[] | undefined {
  if (!pipeline) return undefined;
  return pipeline.map((step): CompressionPipelineStep => {
    const stored: CompressionPipelineStep = { engine: step.engine };
    if (typeof step.intensity === "string" && isStoredStepIntensity(step.intensity)) {
      stored.intensity = step.intensity;
    }
    if (step.config && typeof step.config === "object") {
      stored.config = { ...step.config };
    }
    return stored;
  });
}

export const compressionComboUpdateSchema = z
  .object({
    name: z.string().trim().min(1).max(120).optional(),
    description: z.string().max(1000).optional(),
    pipeline: z.array(pipelineStepSchema).min(1).optional(),
    languagePacks: z.array(z.string().trim().min(1)).optional(),
    outputMode: z.boolean().optional(),
    outputModeIntensity: cavemanIntensitySchema.optional(),
    isDefault: z.boolean().optional(),
  })
  .strict();

export async function GET(request: Request, { params }) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;
  const { id } = await params;
  const combo = getCompressionCombo(id);
  if (!combo) return NextResponse.json({ error: "Compression combo not found" }, { status: 404 });
  return NextResponse.json(combo);
}

export async function PUT(request: Request, { params }) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;
  const { id } = await params;

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const validation = validateBody(compressionComboUpdateSchema, rawBody);
  if (isValidationFailure(validation)) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  if (validation.data.isDefault === true) {
    const changed = setDefaultCompressionCombo(id);
    if (!changed)
      return NextResponse.json({ error: "Compression combo not found" }, { status: 404 });
  }

  const combo = updateCompressionCombo(id, {
    ...validation.data,
    pipeline: toStoredPipeline(validation.data.pipeline),
  });
  if (!combo) return NextResponse.json({ error: "Compression combo not found" }, { status: 404 });
  return NextResponse.json(combo);
}

export async function DELETE(request: Request, { params }) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;
  const { id } = await params;
  const deleted = deleteCompressionCombo(id);
  if (!deleted) {
    return NextResponse.json(
      { error: "Compression combo not found or cannot delete default combo" },
      { status: 404 }
    );
  }
  return NextResponse.json({ ok: true });
}
