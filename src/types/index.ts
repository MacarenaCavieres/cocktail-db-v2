import { z } from "zod";
import { RandomRecipe, RandomRecipes } from "../schemas/recipe-schemas";

export type Random = z.infer<typeof RandomRecipes>;
export type OneRandom = z.infer<typeof RandomRecipe>;

export type Letter = {
    id: number;
    letter: string;
};
