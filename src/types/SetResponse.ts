import Card from "@/types/Card";

interface SetResponse {
    data: SetData
}

interface SetData {
    cards: Card[]
}

export default SetResponse
