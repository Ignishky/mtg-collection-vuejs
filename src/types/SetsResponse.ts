import Set from "@/types/Set";

interface SetsResponse {
    data: SetsData
}

interface SetsData {
    sets: Set[]
}

export default SetsResponse
