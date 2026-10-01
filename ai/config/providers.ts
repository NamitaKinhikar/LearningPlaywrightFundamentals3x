export function hasApiKey(): boolean {
    return Boolean(
        process.env.OPENAI_API_KEY ||
        process.env.ANTHROPIC_API_KEY ||
        process.env.LLM_API_KEY,
    );
}
