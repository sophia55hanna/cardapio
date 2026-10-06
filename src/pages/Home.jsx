import { Link } from "react-router";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function Home() {
    return (
        <section className="grid items-center gap-12 py-16 md:py-24 md:grid-cols-[1.1fr_1fr]">
            <div>
                <span className="inline-block rounded-full bg-destaque-suave px-3 py-1 text-sm font-bold text-destaque">
                    Feito na hora, todo dia
                </span>
                <h1 className="mt-5 font-display text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                    O que tem pra comer <span className="text-destaque">hoje?</span>
                </h1>
                <p className="mt-5 max-w-md text-lg text-suave">
                    Veja o cardápio da cantina: do café da manhã ao jantar, com os horários de cada refeição.
                </p>
                <Link
                    to="/cardapio"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-destaque px-6 py-3 font-bold text-destaque-texto shadow-lg shadow-destaque/25 transition hover:gap-3 hover:brightness-110"
                >
                    Ver cardápio
                    <ArrowRightIcon size={20} weight="bold" />
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4" aria-hidden="true">
                <img src="/images/strogonoff.jpg" alt="" className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover" />
                <img src="/images/pao-de-queijo.jpg" alt="" className="aspect-square w-full rounded-3xl object-cover" />
                <img src="/images/bolo-de-cenoura.jpg" alt="" className="aspect-square w-full rounded-3xl object-cover" />
            </div>
        </section>
    )
}
