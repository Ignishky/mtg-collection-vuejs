import http from "@/http-common";
import ResponseSetsData from "@/types/ResponseSetsData";
import ResponseCardsData from "@/types/ResponseCardsData";
import ResponseCardData from "@/types/ResponseCardData";

class MtgDataService {
    getAllSets(): Promise<ResponseSetsData> {
        return http.get("/sets");
    }

    getSetCards(setCode: string): Promise<ResponseCardsData> {
        return http.get(`/sets/${setCode}`);
    }

    addCardToCollection(cardId: string, isFoiled: boolean): Promise<ResponseCardData> {
        return http.put(`/collection/${cardId}`, `{"isFoiled": ${isFoiled}}`)
    }
}

export default new MtgDataService();
