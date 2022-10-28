interface Price {
    eur: number,
    eur_foil: number
}

interface Card {
    id: string,
    name: string,
    image: string,
    price: Price,
    finishes: string[],
    ownState: string,
}

export default Card
