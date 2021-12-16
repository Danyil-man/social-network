import { ThunkAction } from "redux-thunk";
import { GetAllPostsType, PostsAPI, UsersAPI } from "../api/api"
import { AppStateType, InfernActiontype } from "../redux/reduxStore"

const GET_POSTS = "GET_POSTS";
const SET_LOADING = "SET_LOADING";
const SET_LIKE = "SET_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";

type initialStateType = {
    posts: Array<GetAllPostsType>
    isLoading: boolean
    like: number | null
}

let initialState:initialStateType = {
    posts: [],
    isLoading: false,
    like: null
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
                    if(post.id === action.postID && post.likes_count === action.like){
                        return {...post, is_liked: true, likes_count: action.like}
                    }
                    return post
                })
            }

        case REMOVE_LIKE:
            return{
                ...state,
                posts: state.posts.map( post => {
                    if(post.id === action.postID  && post.likes_count === action.like){
                        return {...post, is_liked: false, likes_count: action.like}
                    }
                    return post
                })
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
        like
    } as const),
    removelikePostSuccess: (postID: number, like: number) => ({
        type: REMOVE_LIKE,
        postID,
        like
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

export const likePost = (postId:number, like: number):ThunkType => async (dispatch) => {
    let response = await UsersAPI.likePost(postId);
    dispatch(actions.likePostSuccess(postId, like));
}

export const removelikePost = (postId:number, like: number):ThunkType => async (dispatch) => {
    let response = await UsersAPI.removeLikePost(postId);
    dispatch(actions.removelikePostSuccess(postId, like));
}

export default postsReducer;