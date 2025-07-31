import type { StateCreator } from "zustand";
import aiService from "../services/AIService";

export type AISlice = {
    recipe: string;
    isGenerating: boolean;
    generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISlice> = (set) => ({
    recipe: "",
    isGenerating: false,
    generateRecipe: async (prompt) => {
        set({ recipe: "", isGenerating: true });
        const data = await aiService.generateRecipe(prompt);

        for await (const textPart of data) {
            set((state) => ({
                recipe: state.recipe + textPart,
            }));
        }
        set({ isGenerating: false });
    },
});
