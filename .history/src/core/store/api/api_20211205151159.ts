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
    resultCode: ResultCodes
}

type RegistrationType = {
    username: string
    login: string
    password : string
}

type LoginType = {
    login: string
    password : string
}

export const authAPI = {
    reg(username:string, login: string, password:string ){
        return instanceApi.post<ResponseType<RegistrationType>>('create-account', {
            username,
            login,
            password
        })
    },
    login(login: string, password: string){
        return instanceApi.post<ResponseType<LoginType>>('login', {
            login,
            password
        })
    },
    getAccount(){
        return instanceApi.get('account')
    },
    logout(){
        return instanceApi.delete('login')
    }
}