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
    isOwnedFoil: boolean
}

export default Card
