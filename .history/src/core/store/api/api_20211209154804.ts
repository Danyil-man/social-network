import axios from "axios";
//import Cookies from "js-cookie";

const instanceApi = axios.create({
  baseURL: "https://linkstagram-api.ga",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo1ODMwLCJhdXRoZW50aWNhdGVkX2J5IjpbInBhc3N3b3JkIl19.9dpWzAaiKjjL2BGttTl_0ImBI7UV5HriaSV19CRH_oA"
  },
});

let accesToken ="eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo1ODMwLCJhdXRoZW50aWNhdGVkX2J5IjpbInBhc3N3b3JkIl19.9dpWzAaiKjjL2BGttTl_0ImBI7UV5HriaSV19CRH_oA"


//                                               AuthUserAPI
type ResponseType<D = {}> = {
  data: D;
  success: string;
};

type RegistrationType = {
  username: string;
  login: string;
  password: string;
};

type LoginType = {
  login: string;
  password: string;
};

export const authAPI = {
  reg(username: string, login: string, password: string) {
    return instanceApi.post<ResponseType<RegistrationType>>("/create-account", {
      username,
      login,
      password,
    });
  },

  login(login: string, password: string) {
    return instanceApi.post<ResponseType<LoginType>>("/login", {
      login,
      password,
    });
  },
};

//                                          ProfileAPI

export type GetAccountType = {
  username: string;
  description: null;
  email: string;
  first_name: null;
  followers: number;
  following: number;
  job_title: null;
  last_name: null;
  profile_photo_url: string;
};

export type EditAccoutType = {
  account: AccountType
}

export type AccountType = {
  username: string;
  profile_photo: AccountPhotoType;
  description: string;
  first_name: string;
  last_name: string;
  job_title: string
}

type AccountPhotoType = {
  id: string;
  storage: string;
  metadata: MetaDataType
}

type MetaDataType = {
  filename: string;
  size: number;
  mime_type: string
}

export const profileAPI = {

  getAccount() {
    return instanceApi.get<GetAccountType>("/account");
  },

  editAccount(account: EditAccoutType) {
    return instanceApi.patch("/account", {
      account: {
        username,
        profile_photo : {
          id,
          storage,
          metadata:{
            filename,
            size,
            mime_type
          }
        },
        description,
        first_name,
        last_name,
        job_title
      }
    }
    )
  }
};
