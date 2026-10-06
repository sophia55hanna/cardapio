import { FireIcon } from "@phosphor-icons/react";
import Selos from "./Selos";

export default function Item({ titulo, descricao, foto, contem, calorias, modoSelos }) {
    return (
        <article className="group overflow-hidden rounded-2xl bg-superficie border border-borda transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
            {foto && (
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={foto}
                        alt={titulo}
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>
            )}
            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{titulo}</h3>
                    {calorias && (
                        <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-suave">
                            <FireIcon size={16} weight="duotone" />
                            {calorias} kcal
                        </span>
                    )}
                </div>
                <p className="mt-1 text-suave">{descricao}</p>
                <Selos contem={contem} modo={modoSelos} />
            </div>
        </article>
    )
}
