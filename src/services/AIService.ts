import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter("google/gemma-3-27b-it:free"),
            prompt,
        });
        return result.textStream;
    },
};
