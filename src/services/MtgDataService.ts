import http from "@/http-common";
import BlocksResponse from "@/types/BlocksResponse";
import BlockResponse from "@/types/BlockResponse";
import SetResponse from "@/types/SetResponse";
import ResponseCardData from "@/types/ResponseCardData";

class MtgDataService {
    getAllBlocks(): Promise<BlocksResponse> {
        return http.get("/blocks");
    }

    getSets(blockCode: string): Promise<BlockResponse> {
        return http.get(`/blocks/${blockCode}`);
    }

    getSetCards(setCode: string): Promise<SetResponse> {
        return http.get(`/sets/${setCode}`);
    }

    addCardToCollection(cardId: string, isFoil: boolean): Promise<ResponseCardData> {
        return http.put(`/collection/${cardId}`, `{"isOwnedFoil": ${isFoil}}`)
    }
}

export default new MtgDataService();
