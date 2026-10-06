import CardapioSemanal from "../components/cardapio/CardapioSemanal";
import Grid from "../components/cardapio/Grid";
import Item from "../components/cardapio/Item";

export default function Cardapio() {
    return (
        <CardapioSemanal titulo="Cardápio">
            {(refeicao) => (
                <Grid>
                    {refeicao.itens.map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                </Grid>
            )}
        </CardapioSemanal>
    )
}
