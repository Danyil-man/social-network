import axios from "axios";
//import Cookies from "js-cookie";



const instanceApi = axios.create({
    baseURL: "https://linkstagram-api.ga/",
})

// instanceApi.interceptors.request.use(
//     (config:any) => {
//         const authToken = Cookies.get("auth-token");

//         if(authToken){
//             config.headers.authorization = `Bearer ${authToken}`
//         }

//         return config
//     },
//     (error => Promise.reject(error))
// )


//                                               AuthUserAPI
type ResponseType<D={}> = {
    data: D
    messages: Array<string>
}

type RegistrationType = {
    success: string
}

type LoginType = {
    login: string
    password : string
}

export const authAPI = {
    reg(username:string, login: string, password:string ){
        return instanceApi.post<ResponseType>('create_new_account', {
            username,
            login,
            password
        }).then(response => ({
            data: response.data,
            status: response.status
        }))
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


export type GetAccountType = {
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
        return instanceApi.get('account').then(response => ({
            data: response.data,
            status: response.status
        }))
    },
}