import CardapioSemanal from "../components/cardapio/CardapioSemanal";
import Grid from "../components/cardapio/Grid";
import Item from "../components/cardapio/Item";
import { ehLivreDeRestricoes } from "../data/restricoes";

export default function CardapioAlternativo() {
    return (
        <CardapioSemanal
            titulo="Cardápio alternativo"
            descricao="Opções adaptadas para quem tem intolerância a lactose, doença celíaca ou alergia a ovo. Confira os selos de cada prato."
        >
            {(refeicao) => {
                const tambemServem = refeicao.itens.filter((item) => ehLivreDeRestricoes(item.contem))

                return (
                    <>
                        <Grid>
                            {refeicao.alternativas?.map((item) => (
                                <Item key={item.id} {...item} modoSelos="sem" />
                            ))}
                        </Grid>
                        {tambemServem.length > 0 && (
                            <p className="mt-4 text-suave">
                                <span className="font-semibold text-texto">Do cardápio normal, também sem glúten, lactose e ovo: </span>
                                {tambemServem.map((item) => item.titulo).join(', ')}.
                            </p>
                        )}
                    </>
                )
            }}
        </CardapioSemanal>
    )
}
