import Set from "@/types/Set";

interface BlocksResponse {
    data: BlocksData
}

interface BlocksData {
    blocks: Set[]
}

export default BlocksResponse
