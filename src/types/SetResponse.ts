import Card from "@/types/Card";

interface SetResponse {
    data: SetData
}

interface SetData {
    name: string,
    cards: Card[]
}

export default SetResponse
