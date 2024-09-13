import axios from "axios";
export const api = axios.create({
  baseURL: "http://157.230.143.9:8080/api/v1/meu-discord",
});
