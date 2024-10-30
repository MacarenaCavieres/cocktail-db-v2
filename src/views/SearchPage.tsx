import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ArticleCard from "../components/ArticleCard";
import ButtonLetter from "../components/ButtonLetter";
import { useAppStore } from "../stores/useAppStore";

export default function SearchPage() {
    const search = useAppStore((state) => state.search);

    const letters = () => {
        const letterSet = [];

        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            letterSet.push({ id: i, letter });
        }
        return letterSet;
    };

    return (
        <div>
            <h2 className="text-4xl md:text-7xl text-tertiary text-center">Result By Letter</h2>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
                {letters().map((letter) => (
                    <ButtonLetter key={letter.id} letter={letter} />
                ))}
            </div>

            <div className="my-20">
                <form className="flex flex-col items-center space-y-4">
                    <label htmlFor="drinkName" className="text-3xl md:text-6xl text-tertiary">
                        Search By Cocktail
                    </label>

                    <div className="flex items-center relative gap-4">
                        <input
                            type="text"
                            name="drinkName"
                            className="placeholder:italic focus:outline-none p-2 w-96 rounded-lg"
                            placeholder="Enter a Cocktail"
                        />
                        <MagnifyingGlassIcon className="h-6 w-6 text-secondary mr-2 absolute bottom-2 right-28" />
                        <button
                            type="button"
                            className="uppercase bg-tertiary text-quaternary px-4 py-2 rounded-lg font-bold"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-20 mx-24 gap-10">
                {search.drinks.map((drink) => (
                    <ArticleCard key={drink.idDrink} recipe={drink} />
                ))}
            </div>
        </div>
    );
}
