import { GLOBAL_CONSTANTS } from "./../../utils/global-constants"
import ky from "ky"
import { loadString } from "../../utils/storage"



export class Api {
   static baseApi =  ky.create({
        prefixUrl: "http://192.168.29.193:3000",
        hooks: {
          beforeRequest: [
            async (request) => {
                const token = await loadString(GLOBAL_CONSTANTS.token)
                request.headers.set("authorization", token)
            },
          ],
        },
      });
    
    static  post(url: string, payload) {
        return this.baseApi.post(url, {json: payload}).json()
      }

     static get(url: string) {
        return this.baseApi.get(url).json()
      }
}



