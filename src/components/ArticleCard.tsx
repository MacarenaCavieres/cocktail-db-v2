export default function ArticleCard() {
    return (
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
    );
}
