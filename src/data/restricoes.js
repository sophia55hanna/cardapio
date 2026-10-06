// Ingredientes que podem aparecer em "contem" de cada prato no db.json
export const restricoes = [
    { id: 'gluten', nome: 'Glúten' },
    { id: 'lactose', nome: 'Lactose' },
    { id: 'ovo', nome: 'Ovo' },
]

export const ehVegetariano = (contem = []) => !contem.includes('carne')

// Prato que serve para quem não pode comer glúten, lactose nem ovo
export const ehLivreDeRestricoes = (contem = []) =>
    restricoes.every((restricao) => !contem.includes(restricao.id))
