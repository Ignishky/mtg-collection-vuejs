import Set from "@/types/Set";

interface SetsResponse {
    data: SetsData
}

interface SetsData {
    blockName: string,
    nbOwned: number,
    nbOwnedFoil: number,
    nbCards: number,
    sets: Set[]
}

export default SetsResponse
