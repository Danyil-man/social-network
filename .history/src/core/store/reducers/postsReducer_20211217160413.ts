import { ThunkAction } from "redux-thunk";
import { GetAllComments, GetAllPostsType, PostsAPI, UsersAPI } from "../api/api"
import { AppStateType, InfernActiontype } from "../redux/reduxStore"

const GET_POSTS = "GET_POSTS";
const SET_LOADING = "SET_LOADING";
const SET_LIKE = "SET_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";
const GET_ALL_COMMENTS = "GET_ALL_COMMENTS";
const GET_SINGLE_POST = "GET_SINGLE_POST";

type initialStateType = {
    posts: Array<GetAllPostsType>
    isLoading: boolean
    comments: Array<GetAllComments>
}

let initialState:initialStateType = {
    posts: [],
    comments: [],
    isLoading: false,
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

        case GET_SINGLE_POST: 
        return{
            ...state,
            username: action.username
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
    getSinglePost: (username: string) => ({
        type: GET_SINGLE_POST,
        data: {username}
    } as const)
}

//                                          THUNKS

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

export const getAllPosts = ():ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.getAllPosts()
    dispatch(actions.getPosts(response.data))
    dispatch(actions.isLoading(false))
}

export const getPostOfSingleUser = (username: string):ThunkType => async (dispatch) => {
    let response = await PostsAPI.getPostsOfSingleUser(username)
    dispatch(actions.getSinglePost(response.data))
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