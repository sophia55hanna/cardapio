import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { CalendarBlankIcon, WarningCircleIcon } from "@phosphor-icons/react";
import DaySelector from "./DaySelector";
import Section from "./Section";

// Segunda-feira da semana atual (sábado e domingo mostram a semana que acabou)
function segundaDaSemana() {
    const data = new Date()
    const diaDaSemana = data.getDay() // 0 = domingo, 1 = segunda, ...
    data.setDate(data.getDate() - (diaDaSemana === 0 ? 6 : diaDaSemana - 1))
    data.setHours(0, 0, 0, 0)
    return data
}

// Ex.: "Segunda-feira, 5 de outubro"
function formatarData(data) {
    const texto = data.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}

// Página da semana com seletor de dia. Cada página decide o que mostrar em cada refeição.
export default function CardapioSemanal({ titulo, descricao, children: renderizarRefeicao }) {
    const [dias, setDias] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(false)
    const [parametros, setParametros] = useSearchParams()

    useEffect(() => {
        fetch('/api/dias')
            .then((resposta) => {
                if (!resposta.ok) throw new Error(resposta.statusText)
                return resposta.json()
            })
            .then(setDias)
            .catch(() => setErro(true))
            .finally(() => setCarregando(false))
    }, [])

    // Dá a cada dia a sua data: segunda + 0, terça + 1, ...
    const segunda = segundaDaSemana()
    const diasComData = dias.map((dia, indice) => {
        const data = new Date(segunda)
        data.setDate(segunda.getDate() + indice)
        return { ...dia, data }
    })

    const indiceDeHoje = new Date().getDay() - 1 // segunda = 0 ... sexta = 4
    const hoje = diasComData[indiceDeHoje]?.id
    const selecionado = diasComData.find((dia) => dia.id === parametros.get('dia'))
        ?? diasComData.find((dia) => dia.id === hoje)
        ?? diasComData[0]

    function selecionar(id) {
        setParametros({ dia: id }, { replace: true })
    }

    return (
        <div className="py-12">
            <h1 className="font-display text-5xl font-extrabold tracking-tight">{titulo}</h1>
            {descricao && <p className="mt-4 max-w-2xl text-lg text-suave">{descricao}</p>}
            {selecionado && (
                <p className="mt-3 inline-flex items-center gap-2 text-lg text-suave">
                    <CalendarBlankIcon size={22} weight="duotone" className="text-secundaria" />
                    {formatarData(selecionado.data)}
                </p>
            )}

            {carregando && (
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="h-72 rounded-2xl bg-superficie border border-borda animate-pulse" />
                    ))}
                </div>
            )}

            {erro && (
                <div className="mt-14 flex items-start gap-3 rounded-2xl border border-borda bg-superficie p-5">
                    <WarningCircleIcon size={24} weight="duotone" className="shrink-0 text-destaque" />
                    <p>
                        Não foi possível carregar o cardápio. Verifique se o JSON Server está rodando
                        (<code className="font-semibold">npm run dev</code> já inicia ele junto).
                    </p>
                </div>
            )}

            {selecionado && (
                <>
                    <DaySelector
                        dias={diasComData}
                        selecionado={selecionado.id}
                        hoje={hoje}
                        onSelecionar={selecionar}
                    />

                    {selecionado.refeicoes.map((refeicao) => (
                        <Section key={refeicao.id} nome={refeicao.nome} horario={refeicao.horario} icone={refeicao.icone}>
                            {renderizarRefeicao(refeicao)}
                        </Section>
                    ))}
                </>
            )}
        </div>
    )
}
