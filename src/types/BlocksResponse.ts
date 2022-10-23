import Set from "@/types/Set";

interface BlocksResponse {
    data: BlocksData
}

interface BlocksData {
    nbCards: number,
    nbOwned: number,
    nbOwnedFoil: number,
    blocks: Set[]
}

export default BlocksResponse
