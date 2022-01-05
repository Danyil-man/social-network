import { ThunkAction } from "redux-thunk";
import {
    CreatePostType, GetAllComments,
    GetAllPostsType, GetSinglePostType, PostAuthor, PostsAPI, UsersAPI
} from "../api/api"
import { AppStateType, InfernActiontype } from "../redux/reduxStore"

const GET_POSTS = "GET_POSTS";
const SET_LOADING = "SET_LOADING";
const SET_LIKE = "SET_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";
const GET_ALL_COMMENTS = "GET_ALL_COMMENTS";
const GET_POST = "GET_POST";
const GET_USER_POSTS = "GET_SINGLE_POST";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_POSTS_COUNT = "SET_POSTS_COUNT";
const SET_COMMENT = "SET_COMMENT";
const CREATE_POST = "CREATE_POST";

type initialStateType = {
    posts: Array<GetAllPostsType>
    isLoading: boolean
    comments: Array<GetAllComments>
    singlePosts: Array<GetSinglePostType>
    message: string
    postItem: CreatePostType
    pageSize: number
    postsCount: number
    currentPage: number
}

let initialState: initialStateType = {
    posts: [],
    comments: [],
    singlePosts: [],
    isLoading: false,
    message: '',
    postItem: {
        description: '',
        photos_attributes: []
    },
    pageSize: 10,
    postsCount: 0,
    currentPage: 1
}

//                                              REDUCER

const postsReducer = (state = initialState, action: ActionCreatorsType): initialStateType => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_POSTS_COUNT:
            return {
                ...state,
                postsCount: action.count
            }

        case SET_LIKE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postID) {
                        return { ...post, is_liked: true, likes_count: action.count + 1 }
                    }
                    return post
                })
            }

        case REMOVE_LIKE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postID) {
                        return { ...post, is_liked: false, likes_count: action.count - 1 }
                    }
                    return post
                })
            }

        case GET_ALL_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }

        case SET_COMMENT:
            return {
                ...state,
                message: action.message
            }

        case GET_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postID) {
                        return { ...post }
                    }
                    return post
                })
            }

        case CREATE_POST:
            return {
                ...state,
                postItem: action.postItem as CreatePostType
            }

        case GET_USER_POSTS:
            return {
                ...state,
                singlePosts: action.singlePost
            }
        default:
            return state
    }
}

type ActionCreatorsType = InfernActiontype<typeof actions>

//                                          ACTION CREATOR

export const actions = {
    getPosts: (posts: Array<GetAllPostsType>) => ({
        type: GET_POSTS,
        posts
    } as const),
    isLoading: (isLoading: boolean) => ({
        type: SET_LOADING,
        isLoading
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    } as const),
    setPostsCount: (postsCount: number) => ({
        type: SET_POSTS_COUNT,
        count: postsCount
    } as const),
    likePostSuccess: (postID: number, like: number) => ({
        type: SET_LIKE,
        postID,
        count: like
    } as const),
    removelikePostSuccess: (postID: number, like: number) => ({
        type: REMOVE_LIKE,
        postID,
        count: like
    } as const),
    getComments: (postID: number, comments: Array<GetAllComments>) => ({
        type: GET_ALL_COMMENTS,
        postID,
        comments
    } as const),
    setComment: (postID: number, message: string, commenter: GetAllComments) => ({
        type: SET_COMMENT,
        postID,
        message,
        commenter
    } as const),
    getPost: (postID: number) => ({
        type: GET_POST,
        postID
    } as const),
    getSinglePost: (username: string | undefined, singlePost: Array<GetSinglePostType>) => ({
        type: GET_USER_POSTS,
        username,
        singlePost
    } as const),
    createPost: (postItem: CreatePostType, author: PostAuthor) => ({
        type: CREATE_POST,
        postItem,
        author
    } as const)
}

//                                          THUNKS

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

export const getAllPosts = (currentPage: number): ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    dispatch(actions.setCurrentPage(currentPage))
    let response = await PostsAPI.getAllPosts(currentPage)
    dispatch(actions.getPosts(response.data))
    //dispatch(actions.setPostsCount(response.data)
    dispatch(actions.isLoading(false))
}
export const getPost = (postId: number): ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.getPost(postId)
    dispatch(actions.getPost(response.data))
    dispatch(actions.isLoading(false))
}

export const createPosts = (postItem: CreatePostType): ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.createPost(postItem)
    debugger
    dispatch(actions.createPost(postItem, response.data))
    dispatch(actions.isLoading(false))
}

export const getPostsOfSingleUser = (username: string | undefined): ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.getPostsOfSingleUser(username)
    dispatch(actions.getSinglePost(username, response.data))
    dispatch(actions.isLoading(false))
}

export const likePost = (postId: number, like: number): ThunkType => async (dispatch) => {
    let response = await UsersAPI.likePost(postId);
    dispatch(actions.likePostSuccess(postId, like));
}

export const removelikePost = (postId: number, like: number): ThunkType => async (dispatch) => {
    let response = await UsersAPI.removeLikePost(postId);
    dispatch(actions.removelikePostSuccess(postId, like));
}

export const getAllComments = (postId: number): ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.getAllComments(postId)
    dispatch(actions.getComments(postId, response.data))
    dispatch(actions.isLoading(false))
}

export const setComment = (postId: number, message: string): ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.sendComment(postId, message)
    dispatch(actions.setComment(postId, message, response.data))
    dispatch(actions.isLoading(false))
}

export default postsReducer;