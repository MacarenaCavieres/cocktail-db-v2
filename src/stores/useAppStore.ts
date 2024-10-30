import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRandomRecipeSlice, RandomRecipeType } from "./randomSlice";
import { createFavoriteSlice, FavoriteSliceType } from "./favoriteSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { createSearchSlice, SearchSliceType } from "./searchSlice";

export const useAppStore = create<
    RandomRecipeType & FavoriteSliceType & NotificationSliceType & SearchSliceType
>()(
    devtools((...a) => ({
        ...createRandomRecipeSlice(...a),
        ...createFavoriteSlice(...a),
        ...createNotificationSlice(...a),
        ...createSearchSlice(...a),
    }))
);
