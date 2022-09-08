interface Price {
    eur: string,
    eur_foil: string
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
