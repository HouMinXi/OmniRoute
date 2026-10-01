/**
 * Persist a Grok Bot OAuth connection from the Cursor deep-control login.
 * Separate from the Cursor connection: a Bot grant cannot call Cursor APIs
 * and a Cursor grant cannot call GrokBotService.
 */

import {
  createProviderConnection,
  getProviderConnections,
  updateProviderConnection,
} from "@/models";
import type { CursorTokenCredentials } from "./cursorLogin";

export type PersistGrokBotConnectionInput = CursorTokenCredentials & {
  machineId?: string | null;
};

function readEmail(row: { email?: unknown }): string | null {
  return typeof row.email === "string" && row.email.length > 0 ? row.email.toLowerCase() : null;
}

/**
 * Create or update a grok-bot connection. Matches an existing row by email so
 * a second login for the same mailbox refreshes the tokens instead of adding
 * a duplicate account.
 */
export async function persistGrokBotConnection(input: PersistGrokBotConnectionInput) {
  const email = input.email ? input.email.toLowerCase() : null;
  const providerSpecificData = {
    machineId: input.machineId || null,
    authMethod: "deep_control",
    accountId: input.accountId || null,
    importedFrom: "dashboard-login",
  };

  if (email) {
    const existing = (await getProviderConnections({ provider: "grok-bot" })) as Array<{
      id: string;
      email?: unknown;
    }>;
    const match = existing.find((row) => readEmail(row) === email);
    if (match) {
      return updateProviderConnection(match.id, {
        accessToken: input.accessToken,
        refreshToken: input.refreshToken,
        expiresAt: input.expiresAt.toISOString(),
        email,
        providerSpecificData,
        testStatus: "active",
        lastError: null,
        lastErrorType: null,
        errorCode: null,
      });
    }
  }

  return createProviderConnection({
    provider: "grok-bot",
    authType: "oauth",
    name: email,
    accessToken: input.accessToken,
    refreshToken: input.refreshToken,
    expiresAt: input.expiresAt.toISOString(),
    email,
    providerSpecificData,
    testStatus: "active",
  });
}
