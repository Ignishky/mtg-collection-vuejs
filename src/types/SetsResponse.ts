import Set from "@/types/Set";

interface SetsResponse {
    data: SetData
}

interface SetData {
    sets: Set[]
}

export default SetsResponse
