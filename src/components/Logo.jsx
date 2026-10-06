import { Link } from "react-router";
import { CookingPotIcon } from "@phosphor-icons/react";

export default function Logo() {
    return (
        <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center size-10 rounded-full bg-destaque text-destaque-texto transition group-hover:-rotate-12">
                <CookingPotIcon size={22} weight="fill" />
            </span>
            <span className="hidden sm:block font-display text-xl font-extrabold tracking-tight">Cantina</span>
        </Link>
    )
}
