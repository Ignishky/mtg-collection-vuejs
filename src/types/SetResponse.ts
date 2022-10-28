import Card from "@/types/Card";

interface SetResponse {
    data: SetData
}

interface SetData {
    name: string,
    nbCards: number,
    nbOwned: number,
    nbFullyOwned: number,
    fullValue: number,
    ownedValue: number,
    cards: Card[]
}

export default SetResponse
