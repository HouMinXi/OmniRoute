import { NextResponse } from "next/server";
import { z } from "zod";
import { createCompressionCombo, listCompressionCombos } from "@/lib/db/compressionCombos";
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
  pipeline: z.infer<typeof compressionComboCreateSchema>["pipeline"]
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

export const compressionComboCreateSchema = z
  .object({
    id: z.string().trim().min(1).optional(),
    name: z.string().trim().min(1).max(120),
    description: z.string().max(1000).optional(),
    pipeline: z.array(pipelineStepSchema).min(1).optional(),
    languagePacks: z.array(z.string().trim().min(1)).optional(),
    outputMode: z.boolean().optional(),
    outputModeIntensity: cavemanIntensitySchema.optional(),
    isDefault: z.boolean().optional(),
  })
  .strict();

export async function GET(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;
  return NextResponse.json({ combos: listCompressionCombos() });
}

export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const validation = validateBody(compressionComboCreateSchema, rawBody);
  if (isValidationFailure(validation)) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const combo = createCompressionCombo({
    ...validation.data,
    pipeline: toStoredPipeline(validation.data.pipeline),
  });
  return NextResponse.json(combo, { status: 201 });
}
