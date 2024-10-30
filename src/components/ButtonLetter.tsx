import { Letter } from "../types";
import "../ButtonStyle.css";

type ButtonLetterProps = {
    letter: Letter;
};

export default function ButtonLetter({ letter }: ButtonLetterProps) {
    return (
        /* From Uiverse.io by gharsh11032000 */
        <button className="button">{letter.letter}</button>
    );
}
