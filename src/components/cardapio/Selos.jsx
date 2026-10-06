import { CheckIcon, LeafIcon, WarningIcon } from "@phosphor-icons/react";
import { ehVegetariano, restricoes } from "../../data/restricoes";

const estilos = {
    alerta: 'bg-destaque-suave text-destaque',
    seguro: 'bg-seguro-suave text-seguro',
}

function Selo({ tipo, Icone, children }) {
    return (
        <li className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${estilos[tipo]}`}>
            <Icone size={14} weight="bold" />
            {children}
        </li>
    )
}

// "contem": mostra o que o prato leva. "sem": mostra do que o prato é livre.
export default function Selos({ contem = [], modo = 'contem' }) {
    return (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Restrições alimentares">
            {restricoes.map(({ id, nome }) => {
                const leva = contem.includes(id)
                if (modo === 'contem' && leva) {
                    return <Selo key={id} tipo="alerta" Icone={WarningIcon}>Contém {nome.toLowerCase()}</Selo>
                }
                if (modo === 'sem' && !leva) {
                    return <Selo key={id} tipo="seguro" Icone={CheckIcon}>Sem {nome.toLowerCase()}</Selo>
                }
                return null
            })}
            {ehVegetariano(contem) && <Selo tipo="seguro" Icone={LeafIcon}>Vegetariano</Selo>}
        </ul>
    )
}
