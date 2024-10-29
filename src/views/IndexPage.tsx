import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";
import ArticleCard from "../components/ArticleCard";

export default function IndexPage() {
    const randomRecipe = useAppStore((state) => state.randomRecipe);
    const fetchRandomRecipe = useAppStore((state) => state.fetchRandomRecipe);

    useEffect(() => {
        fetchRandomRecipe();
    }, []);
    return (
        <div className="flex flex-col items-center space-y-6 mx-2">
            <h2 className="text-4xl md:text-7xl text-tertiary text-center">Surprise me with a Cocktail</h2>
            <button
                type="button"
                className="bg-secondary p-3 text-quaternary rounded-xl w-36"
                onClick={fetchRandomRecipe}
            >
                Click
            </button>

            {randomRecipe.drinks.map((recipe) => (
                <ArticleCard key={recipe.idDrink} recipe={recipe} />
            ))}
        </div>
    );
}
