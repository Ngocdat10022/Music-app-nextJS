import axios from "axios";
const URL = "https://music-api-v3iu.onrender.com/api/";
const api = axios.create({
  baseURL: URL,
});
export default api;
// http://localhost:3000/
