import { z } from "zod";
import { RandomRecipes } from "../schemas/recipe-schemas";

export type Random = z.infer<typeof RandomRecipes>;
