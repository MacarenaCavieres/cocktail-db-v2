import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function IndexPage() {
    const fetchRandomRecipe = useAppStore((state) => state.fetchRandomRecipe);
    useEffect(() => {
        fetchRandomRecipe();
    }, []);
    return (
        <div className="flex flex-col items-center space-y-6">
            <h2 className="text-7xl text-tertiary">Surprise me with a Cocktail</h2>
            <button type="button" className="bg-secondary p-3 text-quaternary rounded-xl w-36">
                Click
            </button>

            <article
                className="text-quaternary border border-quaternary p-7 rounded-xl 
                space-y-6 flex flex-col items-center"
            >
                <img src="./image-random.png" alt="Imagen cocktail" className="w-96" />
                <h3 className="text-3xl">Nombre</h3>
                <button type="button" className="bg-secondary p-3 text-quaternary rounded-xl w-36">
                    Recipe
                </button>
            </article>
        </div>
    );
}
