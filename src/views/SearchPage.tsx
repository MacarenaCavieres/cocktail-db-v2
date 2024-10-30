import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ArticleCard from "../components/ArticleCard";
import ButtonLetter from "../components/ButtonLetter";
import { useAppStore } from "../stores/useAppStore";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

export default function SearchPage() {
    const letter = useAppStore((state) => state.letter);
    const search = useAppStore((state) => state.search);
    const drinkName = useAppStore((state) => state.drinkName);
    const fetchByName = useAppStore((state) => state.fetchByName);
    const showNotification = useAppStore((state) => state.showNotification);

    const [form, setForm] = useState({
        drinkName: "",
    });

    const letters = () => {
        const letterSet = [];

        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            if (letter === "u" || letter === "x") {
                continue;
            }
            letterSet.push({ id: i, letter });
        }
        return letterSet;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(form).includes("")) {
            showNotification({
                text: "The field is required, enter a name",
                error: true,
            });
            return;
        }

        const { drinkName } = form;
        fetchByName(drinkName);
    };

    const isSearch = useMemo(() => drinkName, [search]);

    return (
        <div>
            <h2 className="text-4xl md:text-7xl text-tertiary text-center">Result By Letter</h2>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
                {letters().map((letter) => (
                    <ButtonLetter key={letter.id} letter={letter} />
                ))}
            </div>

            <div className="my-20">
                <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
                    <label htmlFor="drinkName" className="text-3xl md:text-6xl text-tertiary">
                        Search By Cocktail
                    </label>

                    <div className="flex flex-col md:flex-row items-center relative gap-4">
                        <input
                            type="text"
                            name="drinkName"
                            className="placeholder:italic focus:outline-none p-2 pl-9 max-w-96 min-w-72 rounded-lg"
                            placeholder="Enter a Cocktail"
                            onChange={handleChange}
                        />
                        <MagnifyingGlassIcon
                            className="h-6 w-6 text-secondary mr-2 absolute bottom-16 
                        left-2 md:bottom-2 md:left-1"
                        />

                        <button
                            type="submit"
                            className="uppercase bg-tertiary text-quaternary px-4 py-2 rounded-lg font-bold"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            {letter ? (
                <h2 className="text-4xl md:text-7xl text-tertiary text-center">
                    Cocktails with the letter <span className="capitalize drop-shadow-custom">{letter}</span>
                </h2>
            ) : isSearch ? (
                <h2 className="text-4xl md:text-7xl text-tertiary text-center">
                    Cocktails with the name <span className="capitalize drop-shadow-custom">{drinkName}</span>
                </h2>
            ) : (
                ""
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-20 md:mx-24 gap-10">
                {search.drinks.map((drink) => (
                    <ArticleCard key={drink.idDrink} recipe={drink} />
                ))}
            </div>
        </div>
    );
}
