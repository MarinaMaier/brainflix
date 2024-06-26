import { ApiUrl } from "./Api";
import axios from "axios";

export class HomePageServices {
  async fetchAllVideos() {
    try {
      const response = await axios.get(`${ApiUrl}videos`);
      return response.data;
    } catch (error) {
      console.error("This is your error", error);
      return error;
    }
  }

  async fetchVideoDetails(id) {
    try {
      const response = await axios.get(`${ApiUrl}videos/${id}`);
      return response.data;
    } catch (error) {
      console.error("This is your error", error);
      return error;
    }
  }
}

export default HomePageServices;
