import { StateCreator } from "zustand";
import { getByLetter, getByName } from "../services/RecipeService";
import { Letter, Random } from "../types";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export type SearchSliceType = {
    letter: string;
    search: Random;
    drinkName: string;
    fetchByLetter: (letter: Letter["letter"]) => Promise<void>;
    fetchByName: (drinkName: string) => Promise<void>;
};

export const createSearchSlice: StateCreator<
    SearchSliceType & NotificationSliceType,
    [],
    [],
    SearchSliceType
> = (set, get, api) => ({
    letter: "",
    search: {
        drinks: [],
    },
    drinkName: "",
    fetchByLetter: async (letter) => {
        const search = await getByLetter(letter);
        set({
            letter,
            search,
        });
    },
    fetchByName: async (drinkName) => {
        const searchName = await getByName(drinkName);
        if (typeof searchName === "string") {
            createNotificationSlice(set, get, api).showNotification({
                text: "Cocktail not found",
                error: true,
            });
        } else {
            set({
                search: searchName,
                letter: "",
                drinkName,
            });
        }
    },
});
