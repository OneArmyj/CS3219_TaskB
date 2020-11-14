import axios from "axios";

const api = axios.create({
    baseURL: "https://intense-reef-03949.herokuapp.com/",
    responseType: "json",
})

export default api;