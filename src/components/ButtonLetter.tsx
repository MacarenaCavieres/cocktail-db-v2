import { Letter } from "../types";
import "../ButtonStyle.css";
import { useAppStore } from "../stores/useAppStore";

type ButtonLetterProps = {
    letter: Letter;
};

export default function ButtonLetter({ letter }: ButtonLetterProps) {
    const fetchByLetter = useAppStore((state) => state.fetchByLetter);

    return (
        /* From Uiverse.io by gharsh11032000 */
        <button className="button" onClick={() => fetchByLetter(letter.letter)}>
            {letter.letter}
        </button>
    );
}
