import { StateCreator } from "zustand";
import { getDrinkById, randomRecipeService } from "../services/RecipeService";
import { OneRandom, Random } from "../types";

export type RandomRecipeType = {
    randomRecipe: Random;
    modal: boolean;
    selectedDrink: OneRandom;
    fetchRandomRecipe: () => Promise<void>;
    showModal: (id: OneRandom["idDrink"]) => Promise<void>;
    closeModal: () => void;
};

export const createRandomRecipeSlice: StateCreator<RandomRecipeType> = (set) => ({
    randomRecipe: {
        drinks: [],
    },
    modal: false,
    selectedDrink: {} as OneRandom,
    fetchRandomRecipe: async () => {
        const randomRecipe = await randomRecipeService();
        set({
            randomRecipe,
        });
    },
    showModal: async (id) => {
        const selectedDrink = await getDrinkById(id);
        set({
            modal: true,
            selectedDrink,
        });
    },
    closeModal: () => {
        set({
            modal: false,
            selectedDrink: {} as OneRandom,
        });
    },
});
