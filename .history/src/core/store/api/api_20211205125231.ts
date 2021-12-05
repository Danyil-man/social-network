import axios from "axios";


const instanceApi = axios.create({
    withCredentials: true,
    baseURL: "https://linkstagram-api.ga/"
})


//                                               AuthUserAPI

export const authAPI = {
    reg(username:string, login: string, password:string ){
        return instanceApi.post('create-account', {
            username,
            login,
            password
        })
    }
}