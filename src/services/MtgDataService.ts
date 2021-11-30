import http from "@/http-common";
import ResponseData from "@/types/ResponseData";

class MtgDataService {
    getAllSets(): Promise<ResponseData> {
        return http.get("/sets");
    }
}

export default new MtgDataService();
