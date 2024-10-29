import { StateCreator } from "zustand";
import { randomRecipeService } from "../services/RecipeService";
import { Random } from "../types";

export type RandomRecipeType = {
    randomRecipe: Random;
    fetchRandomRecipe: () => Promise<void>;
};

export const createRandomRecipeSlice: StateCreator<RandomRecipeType> = (set) => ({
    randomRecipe: {
        drinks: [],
    },
    fetchRandomRecipe: async () => {
        const randomRecipe = await randomRecipeService();
        set({
            randomRecipe,
        });
    },
});
