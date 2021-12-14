import { ThunkAction } from "redux-thunk";
import { GetAllPostsType, PostsAPI } from "../api/api"
import { AppStateType, InfernActiontype } from "../redux/reduxStore"

const GET_POSTS = "GET_POSTS";
const SET_LOADING = "SET_LOADING"

type initialStateType = {
    posts: Array<GetAllPostsType>
    isLoading: boolean
}

let initialState:initialStateType = {
    posts: [],
    isLoading: false
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
    } as const)
}

//                                          THUNKS

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

export const getAllPosts = ():ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))
    let response = await PostsAPI.getAllPosts()
    dispatch(actions.getPosts(response.data))
    debugger
    dispatch(actions.isLoading(false))
}

export default postsReducer;