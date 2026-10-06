import { ClockIcon, CoffeeIcon, CookieIcon, ForkKnifeIcon, MoonStarsIcon } from "@phosphor-icons/react";

const icones = {
    cafe: CoffeeIcon,
    almoco: ForkKnifeIcon,
    lanche: CookieIcon,
    jantar: MoonStarsIcon,
}

export default function Section({ nome, horario, icone, children }) {
    const Icone = icones[icone] ?? ForkKnifeIcon

    return (
        <section className="mt-14">
            <header className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center size-11 rounded-xl bg-destaque-suave text-secundaria">
                    <Icone size={24} weight="duotone" />
                </span>
                <h2 className="font-display text-2xl font-extrabold">{nome}</h2>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-borda px-3 py-1 text-sm font-semibold text-suave">
                    <ClockIcon size={16} weight="bold" />
                    {horario}
                </span>
            </header>
            {children}
        </section>
    )
}
