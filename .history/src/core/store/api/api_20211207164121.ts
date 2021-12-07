import axios from "axios";
//import Cookies from "js-cookie";



const instanceApi = axios.create({
    baseURL: "https://linkstagram-api.ga/",
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*',
      }
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
    messages: string
}

type RegistrationType = {
    username: string
    login:string
    password:string
}

type LoginType = {
    login: string
    password : string
}



export const authAPI = {
    reg(username:string, login: string, password:string ){
        console.log(username, login, password)
        return instanceApi.post('create-account', {
            body: {
                username, 
                login, 
                password
            }
        })
    },

    login(login: string, password: string){
        return instanceApi.post<LoginType>('login', {
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
        return instanceApi.get<GetAccountType>('account')
    },
}