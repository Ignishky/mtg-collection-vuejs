import Set from "@/types/Set";

interface SetsResponse {
    data: SetsData
}

interface SetsData {
    blockName: string,
    sets: Set[]
}

export default SetsResponse
