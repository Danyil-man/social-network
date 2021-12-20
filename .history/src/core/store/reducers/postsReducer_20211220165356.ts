import { ThunkAction } from "redux-thunk";
import { GetAllComments, GetAllPostsType, GetSinglePostType, PostsAPI, UsersAPI } from "../api/api"
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

type initialStateType = {
    posts: Array<GetAllPostsType>
    isLoading: boolean
    comments: Array<GetAllComments>
    singlePosts: Array<GetSinglePostType>
    pageSize: number
    postsCount: number
    currentPage: number
}

let initialState:initialStateType = {
    posts: [],
    comments: [],
    singlePosts: [],
    isLoading: false,
    pageSize: 10,
    postsCount: 0,
    currentPage: 1
}

//                                              REDUCER

const postsReducer = (state = initialState, action:ActionCreatorsType):initialStateType => {
    switch(action.type){
        case GET_POSTS: 
        return{
            ...state,
            posts: action.posts
        }

        case SET_LOADING:
            return{
                ...state,
                isLoading: action.isLoading
            }

        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }

        case SET_POSTS_COUNT:
            return{
                ...state,

            }

        case SET_LIKE:
            return{
                ...state,
                posts: state.posts.map( post => {
                    if(post.id === action.postID){
                        return {...post, is_liked: true, likes_count: action.count + 1}
                    }
                    return post
                })
            }

        case REMOVE_LIKE:
            return{
                ...state,
                posts: state.posts.map( post => {
                    if(post.id === action.postID){
                        return {...post, is_liked: false, likes_count: action.count - 1}
                    }
                    return post
                })
            }

        case GET_ALL_COMMENTS:
            return{
                ...state,
                comments: action.comments
            } 

        case GET_POST:
            return{
                ...state,
                posts: state.posts.map( post => {
                    if(post.id === action.postID){
                        return {...post}
                    }
                    return post
                })
            }

        case GET_USER_POSTS: 
        return{
            ...state,
            singlePosts: action.singlePost
            // singlePosts: state.singlePosts.map( post => {
            //     if( post.author.username === action.username){
            //         return {...post}
            //     }
            //     return post
                
            // })
        }
            default: 
            return state
    }
}

type ActionCreatorsType = InfernActiontype<typeof actions>

//                                          ACTION CREATOR

export const actions = {
    getPosts: (posts:Array<GetAllPostsType>) => ({
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
    setPostsCount: ()=> ({

    } as const),
    likePostSuccess: (postID: number,  like:number) => ({
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
    getPost: (postID: number) => ({
        type: GET_POST,
        postID
    } as const),
    getSinglePost: (username: string | undefined, singlePost: Array<GetSinglePostType>) => ({
        type: GET_USER_POSTS,
        username,
        singlePost
    } as const),
    
}

//                                          THUNKS

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

export const getAllPosts = (currentPage:number, pageSize:number):ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    dispatch(actions.setCurrentPage(currentPage))
    let response = await PostsAPI.getAllPosts(currentPage)
    dispatch(actions.getPosts(response.data))
    dispatch(actions.isLoading(false))
}
export const getPost = (postId: number):ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.getPost(postId)
    dispatch(actions.getPost(response.data))
    dispatch(actions.isLoading(false))
}

export const getPostsOfSingleUser = (username: string | undefined):ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.getPostsOfSingleUser(username)
    dispatch(actions.getSinglePost(username, response.data))
    dispatch(actions.isLoading(false))
}

export const likePost = (postId:number, like: number):ThunkType => async (dispatch) => {
    let response = await UsersAPI.likePost(postId);
    dispatch(actions.likePostSuccess(postId, like));
}

export const removelikePost = (postId:number, like: number):ThunkType => async (dispatch) => {
    let response = await UsersAPI.removeLikePost(postId);
    dispatch(actions.removelikePostSuccess(postId, like));
}

export const getAllComments = (postId:number):ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.getAllComments(postId)
    dispatch(actions.getComments(postId, response.data))
    dispatch(actions.isLoading(false))
}

export default postsReducer;