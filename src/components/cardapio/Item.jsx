export default function Item({ titulo, descricao, foto }) {
    return (
        <article className="group overflow-hidden rounded-2xl bg-superficie border border-borda transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={foto}
                    alt={titulo}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{titulo}</h3>
                <p className="mt-1 text-suave">{descricao}</p>
            </div>
        </article>
    )
}
