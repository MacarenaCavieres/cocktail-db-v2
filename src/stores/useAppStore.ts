import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRandomRecipeSlice, RandomRecipeType } from "./randomSlice";
import { createFavoriteSlice, FavoriteSliceType } from "./favoriteSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export const useAppStore = create<RandomRecipeType & FavoriteSliceType & NotificationSliceType>()(
    devtools((...a) => ({
        ...createRandomRecipeSlice(...a),
        ...createFavoriteSlice(...a),
        ...createNotificationSlice(...a),
    }))
);
