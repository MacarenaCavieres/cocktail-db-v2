import axios from "axios";
import { RandomRecipes } from "../schemas/recipe-schemas";

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
