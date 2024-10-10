import { createOpenAI } from '@ai-sdk/openai';

export function getAnthropicModel(apiKey: string) {
  const anthropic = createOpenAI({
    baseURL: process.env.PROVIDER_BASE_URL,
    apiKey,
  });

  const modelId = process.env.AI_MODEL_NAME || 'null';
  return anthropic(modelId);
}