import http from "@/http-common";
import ResponseData from "@/types/ResponseData";

class MtgDataService {
    getAllBlocks(): Promise<ResponseData> {
        return http.get("/blocks");
    }
}

export default new MtgDataService();
