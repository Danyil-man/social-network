import axios from "axios";


const instanceApi = axios.create({
    withCredentials: true,
    baseURL: "https://linkstagram-api.ga/"
})
