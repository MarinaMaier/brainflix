import { ApiKey, ApiUrl } from "./Api";
import axios from "axios";

export class HomePageServices {
    constructor() {}

    async fetchAllVideos() {
        try {
            const response = await axios.get(`${ApiUrl}videos/?api_key=${ApiKey}`)
            return response.data;
          } catch (error){
            console.error("This is your error", error);
            return error;
          }
    }

    async fetchVideoDetails(id) {
        try {
            const response = await axios.get(`${ApiUrl}videos/${id}?api_key=${ApiKey}`)
            console.log(response.data);
            return response.data;
        } catch (error){
            console.error("This is your error", error);
            return error;
        }
    }
}

export default HomePageServices;