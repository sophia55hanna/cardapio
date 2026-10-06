import { NavLink } from "react-router";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function MenuLink({ to, children }) {
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) =>
                `px-3 sm:px-4 py-2 rounded-full font-semibold transition ${isActive
                    ? 'bg-destaque-suave text-destaque'
                    : 'text-suave hover:text-texto'}`
            }
        >
            {children}
        </NavLink>
    )
}

export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-fundo/85 backdrop-blur border-b border-borda">
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-2">
                <Logo />
                <div className="flex items-center sm:gap-2">
                    <MenuLink to="/">Início</MenuLink>
                    <MenuLink to="/cardapio">Cardápio</MenuLink>
                    <span className="w-px h-6 bg-borda mx-1 sm:mx-2" />
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
