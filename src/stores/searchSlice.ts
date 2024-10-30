import { StateCreator } from "zustand";
import { getByLetter, getByName } from "../services/RecipeService";
import { Letter, Random } from "../types";

export type SearchSliceType = {
    letter: string;
    search: Random;
    fetchByLetter: (letter: Letter["letter"]) => Promise<void>;
    fetchByName: (drinkName: string) => Promise<void>;
};

export const createSearchSlice: StateCreator<SearchSliceType> = (set) => ({
    letter: "",
    search: {
        drinks: [],
    },
    searchName: {
        drinks: [],
    },
    fetchByLetter: async (letter) => {
        const search = await getByLetter(letter);
        set({
            letter,
            search,
        });
    },
    fetchByName: async (drinkName) => {
        const searchName = await getByName(drinkName);
        set({
            search: searchName,
        });
    },
});
