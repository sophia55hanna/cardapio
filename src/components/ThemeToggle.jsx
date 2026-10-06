import { useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

export default function ThemeToggle() {
    const [escuro, setEscuro] = useState(() => document.documentElement.classList.contains('dark'))

    function alternar() {
        const novo = !escuro
        setEscuro(novo)
        document.documentElement.classList.toggle('dark', novo)
        try {
            localStorage.setItem('tema', novo ? 'escuro' : 'claro')
        } catch {
            // sem localStorage: o tema vale só para esta visita
        }
    }

    return (
        <button
            type="button"
            onClick={alternar}
            aria-label={escuro ? 'Usar tema claro' : 'Usar tema escuro'}
            title={escuro ? 'Tema claro' : 'Tema escuro'}
            className="grid place-items-center size-10 rounded-full border border-borda text-suave hover:text-destaque hover:border-destaque transition cursor-pointer"
        >
            {escuro ? <SunIcon size={20} weight="bold" /> : <MoonIcon size={20} weight="bold" />}
        </button>
    )
}
