import { useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { OneRandom } from "../types";
import { useMemo } from "react";

type ArticleCardProps = {
    recipe: OneRandom;
};

export default function ArticleCard({ recipe }: ArticleCardProps) {
    const showModal = useAppStore((state) => state.showModal);

    const { pathname } = useLocation();
    const isFavPage = useMemo(() => pathname === "/favorites", [pathname]);

    return (
        <article
            className="text-quaternary border border-quaternary p-7 rounded-xl 
                space-y-6 flex flex-col items-center"
        >
            <div className="overflow-hidden">
                <img
                    src={recipe.strDrinkThumb}
                    alt={`Imagen de ${recipe.strDrink}`}
                    className={
                        isFavPage
                            ? "w-80 hover:scale-125 transition-transform hover:rotate-2"
                            : "w-100 hover:scale-125 transition-transform hover:rotate-2"
                    }
                />
            </div>
            <h3 className="text-4xl font-bold text-center">{recipe.strDrink}</h3>
            <h3 className="text-xl text-center">Category: {recipe.strCategory}</h3>
            <button
                type="button"
                className="bg-secondary p-3 text-quaternary rounded-xl w-36 hover:bg-lime-800"
                onClick={() => showModal(recipe.idDrink)}
            >
                Recipe
            </button>
        </article>
    );
}
