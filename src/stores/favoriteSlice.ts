import { StateCreator } from "zustand";
import { OneRandom } from "../types";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export type FavoriteSliceType = {
    favorites: OneRandom[];
    handleFavoritesClick: (drink: OneRandom) => void;
    favoritesExists: (id: OneRandom["idDrink"]) => boolean;
    loadFromStorage: () => void;
};

export const createFavoriteSlice: StateCreator<
    FavoriteSliceType & NotificationSliceType,
    [],
    [],
    FavoriteSliceType
> = (set, get, api) => ({
    favorites: [],
    handleFavoritesClick: (drink) => {
        if (get().favoritesExists(drink.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter((favorite) => favorite.idDrink !== drink.idDrink),
            }));
            createNotificationSlice(set, get, api).showNotification({
                text: "Cocktail Successfully Removed",
                error: false,
            });
        } else {
            set((state) => ({
                favorites: [...state.favorites, drink],
            }));
            createNotificationSlice(set, get, api).showNotification({
                text: "Cocktail Added Successfully",
                error: false,
            });
        }

        localStorage.setItem("favorites", JSON.stringify(get().favorites));
    },
    favoritesExists: (id) => {
        return get().favorites.some((fav) => fav.idDrink === id);
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites),
            });
        }
    },
});
