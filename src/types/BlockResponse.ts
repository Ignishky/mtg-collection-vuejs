import Set from "@/types/Set";

interface BlockResponse {
    data: BlockData
}

interface BlockData {
    blockName: string,
    nbOwned: number,
    nbFullyOwned: number,
    nbCards: number,
    sets: Set[]
}

export default BlockResponse
