import http from "@/http-common";
import SetsResponse from "@/types/SetsResponse";
import SetResponse from "@/types/SetResponse";
import ResponseCardData from "@/types/ResponseCardData";

class MtgDataService {
    getAllSets(): Promise<SetsResponse> {
        return http.get("/sets");
    }

    getSetCards(setCode: string): Promise<SetResponse> {
        return http.get(`/sets/${setCode}`);
    }

    addCardToCollection(cardId: string, isFoiled: boolean): Promise<ResponseCardData> {
        return http.put(`/collection/${cardId}`, `{"isFoiled": ${isFoiled}}`)
    }
}

export default new MtgDataService();
