import axios from "axios";

const ApiUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';
const ApiKey = await (async () => {
    try {
        const resp = await axios.get(`${ApiUrl}register`);
        return resp.data.api_key;
    } catch (error) {
        console.error('Failed to get API Key: ', error);
        throw error;
    }
})();

export { ApiKey, ApiUrl };