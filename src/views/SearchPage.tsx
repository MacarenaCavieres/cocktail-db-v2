import ButtonLetter from "../components/ButtonLetter";

export default function SearchPage() {
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
        </div>
    );
}
