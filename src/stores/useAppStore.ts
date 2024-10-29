import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRandomRecipeSlice, RandomRecipeType } from "./randomSlice";

export const useAppStore = create<RandomRecipeType>()(
    devtools((...a) => ({
        ...createRandomRecipeSlice(...a),
    }))
);
