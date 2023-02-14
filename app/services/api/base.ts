import { GLOBAL_CONSTANTS } from "./../../utils/global-constants"
import ky from "ky"
import { loadString } from "../../utils/storage"



export class Api {
    baseApi =  ky.create({
        prefixUrl: "http://localhost:3002",
        hooks: {
          beforeRequest: [
            async (request) => {
                const token = await loadString(GLOBAL_CONSTANTS.token)
                request.headers.set("authorization", token)
            },
          ],
        },
      });
    
      post(url: string, payload) {
        return this.baseApi.post(url, {json: payload}).json()
      }

      get(url: string) {
        return this.baseApi.get(url).json()
      }
}



