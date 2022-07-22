import http from "@/http-common";
import BlocksResponse from "@/types/BlocksResponse";
import SetsResponse from "@/types/SetsResponse";
import SetResponse from "@/types/SetResponse";
import ResponseCardData from "@/types/ResponseCardData";

class MtgDataService {
    getAllBlocks(): Promise<BlocksResponse> {
        return http.get("/blocks");
    }

    getSets(blockCode: string): Promise<SetsResponse> {
        return http.get(`/blocks/${blockCode}`);
    }

    getSetCards(setCode: string): Promise<SetResponse> {
        return http.get(`/sets/${setCode}`);
    }

    addCardToCollection(cardId: string, isFoiled: boolean): Promise<ResponseCardData> {
        return http.put(`/collection/${cardId}`, `{"isFoiled": ${isFoiled}}`)
    }
}

export default new MtgDataService();
