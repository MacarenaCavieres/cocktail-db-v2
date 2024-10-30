import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import ArticleCard from "../components/ArticleCard";

export default function FavoritesPage() {
    const favorites = useAppStore((state) => state.favorites);

    const isFavorites = useMemo(() => favorites.length, [favorites]);

    return (
        <div className="">
            <h2 className="capitalize text-4xl md:text-7xl text-tertiary text-center">
                {isFavorites ? "cocktail list" : "your favorite cocktails will appear here"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
                {favorites.map((recipe) => (
                    <ArticleCard key={recipe.idDrink} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
