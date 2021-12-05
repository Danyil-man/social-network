import axios from "axios";


const instanceApi = axios.create({
    withCredentials: true,
    baseURL: "https://linkstagram-api.ga/"
})

export enum ResultCodes {
    Success = 0,
    Error = 1
}

//                                               AuthUserAPI
type ResponseType<D={}> = {
    data: D
    success: Array<string>
    resultCode: 
}


export const authAPI = {
    reg(username:string, login: string, password:string ){
        return instanceApi.post('create-account', {
            username,
            login,
            password
        })
    },
    login(login : string, password: string){
        return instanceApi.post('login', {
            login,
            password
        })
    },
    logout(){
        return instanceApi.delete('login')
    }
}