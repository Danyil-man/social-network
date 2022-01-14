import axios from "axios";
import { GetSingleUserType, GetUserType } from "../reducers/usersReducer";
//import Cookies from "js-cookie";

const token = localStorage.getItem('token')

export const instanceApi = axios.create({
  baseURL: "https://linkstagram-api.ga",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo1ODMwLCJhdXRoZW50aWNhdGVkX2J5IjpbInBhc3N3b3JkIl19.9dpWzAaiKjjL2BGttTl_0ImBI7UV5HriaSV19CRH_oA"
    //authorization: 'Bearer ' + localStorage.getItem('token')
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
  description?: string;
  email?: string;
  first_name?: string;
  followers?: number;
  following?: number;
  job_title?: string;
  last_name?: string;
  profile_photo_url: string | null;
};

export type AccountType = {
  username: string | undefined;
  profile_photo: AccountPhotoType;
  description: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  job_title: string | undefined
}

export type AccountPhotoType = {
  id: string;
  storage: string;
  metadata: MetaDataType
}

export type MetaDataType = {
  filename: string;
  size: number;
  mime_type: string
}

export const profileAPI = {
  getAccount() {
    return instanceApi.get<GetAccountType>("/account");
  },

  editAccount(account: AccountType) {
    return instanceApi.patch<AccountType>("/account", account)
  },

};

//                              UsersAPI

export const UsersAPI = {
  getUsers() {
    return instanceApi.get<Array<GetUserType>>('/profiles')
  },
  getSingleProfile(username: string) {
    return instanceApi.get<GetSingleUserType>(`/profiles/${username}`)
  },
  likePost(postId: number) {
    return instanceApi.post(`/posts/${postId}/like`)
  },
  removeLikePost(postId: number) {
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
  job_title: null,
  last_name: null,
  profile_photo_url: string | null
}

type PostphotosType = {
  id: number
  url: string
}

export type GetAllPostsType = {
  id: number
  author: AuthorType
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
  job_title: null
  last_name: null
  profile_photo_url: null
}

export type GetAllComments = {
  id: number
  commenter: CommenterType
  created_at: string
  message: string
}

export type GetSinglePostType = {
  id: number
  author: AuthorType
  comments_count: number
  created_at: string
  description: string
  is_liked: boolean
  likes_count: number
  photos: Array<PostphotosType>
}

export type CreatePostType = {
  description: string
  photos_attributes: Array<ImagePhotoType>
}

export type ImagePhotoType = {
  image: ImageData
}

export type ImageData = {
  id: string
  storage: string
  metadata: MetaDataType
}

export type PostAuthor = {
  id: number
  author: AuthorType
  comments_count: number
  created_at: string
  description: string
  is_liked: boolean
  likes_count: number
  photos: Array<PostphotosType>
}

export const PostsAPI = {
  getAllPosts(currentPage = 1) {
    return instanceApi.get<Array<GetAllPostsType>>(`/posts?page=${currentPage}`)
  },
  getPost(postId: number) {
    return instanceApi.get(`/posts/${postId}`)
  },
  createPost(postItem: CreatePostType) {
    return instanceApi.post<PostAuthor>('/posts', postItem)
  },
  deletePost(postId: number) {
    return instanceApi.delete(`/posts/${postId}`)
  },
  getParams() {
    return instanceApi.get('/s3/params')
  },
  getPostsOfSingleUser(username: string | undefined) {
    return instanceApi.get<Array<GetSinglePostType>>(`/profiles/${username}/posts`)
  },
  getAllComments(postId: number) {
    return instanceApi.get<Array<GetAllComments>>(`/posts/${postId}/comments`)
  },
  sendComment(postId: number, message: string) {
    return instanceApi.post<GetAllComments>(`/posts/${postId}/comments`, { message: message })
  }
}