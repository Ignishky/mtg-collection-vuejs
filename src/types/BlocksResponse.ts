import Set from "@/types/Set";

interface BlocksResponse {
    data: BlocksData
}

interface BlocksData {
    nbCards: number,
    nbOwned: number,
    nbFullyOwned: number,
    blocks: Set[]
}

export default BlocksResponse
