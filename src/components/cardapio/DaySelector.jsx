export default function DaySelector({ dias, selecionado, hoje, onSelecionar }) {
    return (
        <div role="tablist" aria-label="Dias da semana" className="mt-8 grid grid-cols-5 gap-2 sm:gap-3">
            {dias.map((dia) => {
                const ativo = dia.id === selecionado

                return (
                    <button
                        key={dia.id}
                        type="button"
                        role="tab"
                        aria-selected={ativo}
                        onClick={() => onSelecionar(dia.id)}
                        className={`relative flex flex-col items-center rounded-2xl border py-3 transition cursor-pointer ${ativo
                            ? 'bg-destaque border-destaque text-destaque-texto shadow-lg shadow-destaque/25'
                            : 'bg-superficie border-borda text-suave hover:border-destaque hover:text-texto'}`}
                    >
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                            {dia.nome.slice(0, 3)}
                        </span>
                        <span className="font-display text-2xl sm:text-3xl font-extrabold">
                            {dia.data.getDate()}
                        </span>
                        {dia.id === hoje && (
                            <span className={`text-[10px] sm:text-xs font-bold ${ativo ? '' : 'text-destaque'}`}>
                                Hoje
                            </span>
                        )}
                    </button>
                )
            })}
        </div>
    )
}
