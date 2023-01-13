import axios from "axios";
const URL = "http://localhost:3000/api/";
const api = axios.create({
  baseURL: URL,
});
export default api;
