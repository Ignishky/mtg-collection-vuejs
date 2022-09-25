interface Price {
    eur: number,
    eur_foil: number
}

interface Card {
    id: string,
    name: string,
    image: string,
    price: Price,
    isOwned: boolean,
    isFoiled: boolean
}

export default Card
