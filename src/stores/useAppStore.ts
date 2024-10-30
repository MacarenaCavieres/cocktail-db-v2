import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRandomRecipeSlice, RandomRecipeType } from "./randomSlice";
import { createFavoriteSlice, FavoriteSliceType } from "./favoriteSlice";

export const useAppStore = create<RandomRecipeType & FavoriteSliceType>()(
    devtools((...a) => ({
        ...createRandomRecipeSlice(...a),
        ...createFavoriteSlice(...a),
    }))
);
