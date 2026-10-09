import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/shared/utils/apiAuth";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { databaseSettingsSchema } from "@/shared/validation/settingsSchemas";
import { getDatabaseSettings, updateDatabaseSettings } from "@/lib/db/databaseSettings";
import { redactCacheSecrets } from "@/lib/db/cacheSecrets";

function publicDatabaseSettings() {
  const settings = getDatabaseSettings();
  return { ...settings, cache: redactCacheSecrets(settings.cache) };
}

const databaseSettingsPatchSchema = databaseSettingsSchema.partial().strict();

export async function GET(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    return NextResponse.json(publicDatabaseSettings());
  } catch (error) {
    console.error("Error getting database settings:", error);
    return NextResponse.json({ error: "Failed to load database settings" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const rawBody = await request.json();
    const validation = validateBody(databaseSettingsPatchSchema, rawBody);

    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const current = getDatabaseSettings();
    const data = validation.data;
    updateDatabaseSettings({
      logs: data.logs,
      backup: data.backup ? { ...current.backup, ...data.backup } : undefined,
      cache: data.cache ? { ...current.cache, ...data.cache } : undefined,
      retention: data.retention ? { ...current.retention, ...data.retention } : undefined,
      aggregation: data.aggregation ? { ...current.aggregation, ...data.aggregation } : undefined,
      optimization: data.optimization
        ? { ...current.optimization, ...data.optimization }
        : undefined,
    });

    // Return merged settings (GET response pattern)
    return NextResponse.json(publicDatabaseSettings());
  } catch (error) {
    console.error("Error updating database settings:", error);
    return NextResponse.json({ error: "Failed to update database settings" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  return PATCH(request);
}
