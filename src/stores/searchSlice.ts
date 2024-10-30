import { StateCreator } from "zustand";
import { getByLetter } from "../services/RecipeService";
import { Letter, Random } from "../types";

export type SearchSliceType = {
    search: Random;
    fetchByLetter: (letter: Letter["letter"]) => Promise<void>;
};

export const createSearchSlice: StateCreator<SearchSliceType> = (set) => ({
    search: {
        drinks: [],
    },
    fetchByLetter: async (letter) => {
        const search = await getByLetter(letter);
        set({
            search,
        });
    },
});
