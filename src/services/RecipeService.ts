import axios from "axios";
import { RandomRecipe, RandomRecipes } from "../schemas/recipe-schemas";
import { OneRandom } from "../types";

export async function randomRecipeService() {
    try {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        const { data } = await axios.get(url);
        const result = RandomRecipes.safeParse(data);
        if (result.success) {
            return result.data;
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getDrinkById(id: OneRandom["idDrink"]) {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const { data } = await axios.get(url);
        const result = RandomRecipe.safeParse(data.drinks[0]);
        if (result.success) {
            return result.data;
        }
    } catch (error) {
        console.error(error);
    }
}
