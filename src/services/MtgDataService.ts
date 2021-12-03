import http from "@/http-common";
import ResponseSetsData from "@/types/ResponseSetsData";
import ResponseCardsData from "@/types/ResponseCardsdata";

class MtgDataService {
    getAllSets(): Promise<ResponseSetsData> {
        return http.get("/sets");
    }

    getSetCards(setCode: string): Promise<ResponseCardsData> {
        return http.get(`/sets/${setCode}`);
    }
}

export default new MtgDataService();
