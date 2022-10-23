import Set from "@/types/Set";

interface BlockResponse {
    data: BlockData
}

interface BlockData {
    blockName: string,
    nbOwned: number,
    nbOwnedFoil: number,
    nbCards: number,
    sets: Set[]
}

export default BlockResponse
