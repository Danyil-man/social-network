import axios from "axios";
//import Cookies from "js-cookie";

const instanceApi = axios.create({
  baseURL: "https://linkstagram-api.ga",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});

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
  logout() {
    return instanceApi.delete<ResponseType>("/login");
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

export const profileAPI = {
  getAccount() {
    return instanceApi.get<ResponseType<GetAccountType>>("/account?");
  },
};
