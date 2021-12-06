import axios from "axios";
import Cookies from "js-cookie";



const instanceApi = axios.create({
    withCredentials: true,
    baseURL: "https://linkstagram-api.ga/",
    
})

instanceApi.interceptors.request.use(
    (config:any) => {
        const authToken = Cookies.get("auth-token");

        if(authToken){
            config.headers.authorization = `Bearer ${authToken}`
        }

        return config
    },
    (error => Promise.reject(error))
)


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
    logout(){
        return instanceApi.delete('login')
    }
}


//                                          ProfileAPI


type GetAccountType = {
    username: string
    description: null
    email: string
    first_name: null
    followers: number
    following: number
    job_title: null
    last_name: null
    profile_photo_url: string
}


export const profileAPI = {
    getAccount(){
        return instanceApi.get<GetAccountType>('account')
    },
}