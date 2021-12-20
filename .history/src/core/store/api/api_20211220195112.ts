import axios from "axios";
import { GetSingleUserType, GetUserType } from "../reducers/usersReducer";
//import Cookies from "js-cookie";


export const instanceApi = axios.create({
  baseURL: "https://linkstagram-api.ga",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo1ODMwLCJhdXRoZW50aWNhdGVkX2J5IjpbInBhc3N3b3JkIl19.9dpWzAaiKjjL2BGttTl_0ImBI7UV5HriaSV19CRH_oA"
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
    })
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
  username?: string;
  description?: null;
  email?: string;
  first_name?: null;
  followers?: number;
  following?: number;
  job_title?: null;
  last_name?: null;
  profile_photo_url?: string;
};

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

  editAccount(account: AccountType) {
    return instanceApi.patch<GetAccountType>("/account", account)
  },

};

//                              UsersAPI

export const UsersAPI = {
  getUsers() {
    return instanceApi.get<Array<GetUserType>>('/profiles')
  },
  getSingleProfile(username: string){
    return instanceApi.get<GetSingleUserType>(`/profiles/${username}`)
  },
  likePost(postId: number) {
    return instanceApi.post(`/posts/${postId}/like`)
  },
  removeLikePost(postId: number){
    return instanceApi.delete(`/posts/${postId}/like`)
  }
}

//                              POSTS API

type AuthorType = {
  username: string,
  description: null,
  first_name: null,
  followers: number,
  following: number,
  job_title:null,
  last_name: null,
  profile_photo_url: string | null
}

type PostphotosType = {
  id: number
  url: string
}

export type GetAllPostsType = {
  id: number
  author:AuthorType
  comments_count: number
  created_at: string
  description: string
  is_liked: boolean
  likes_count: number
  photos: Array<PostphotosType>
}

type CommenterType = {
  username: string
  description: null
  first_name: null
  followers: number
  following: number
  job_title:null
  last_name: null
  profile_photo_url:null
}

export type GetAllComments = {
  id:number
  commenter: CommenterType
  created_at: string
  message: string
}

export type GetSinglePostType = {
  id: number
  author:AuthorType
  comments_count: number
  created_at: string
  description: string
  is_liked: boolean
  likes_count: number
  photos: Array<PostphotosType>
}



export const PostsAPI = {
  getAllPosts(currentPage=1) {
    return instanceApi.get<Array<GetAllPostsType>>(`/posts?page=${currentPage}`)
  },
  getPost(postId: number) {
    return instanceApi.get(`/posts/${postId}`)
  },
  getPostsOfSingleUser(username: string | undefined){
    return instanceApi.get<Array<GetSinglePostType>>(`/profiles/${username}/posts`)
  },
  getAllComments(postId: number) {
    return instanceApi.get<Array<GetAllComments>>(`/posts/${postId}/comments`)
  },
}