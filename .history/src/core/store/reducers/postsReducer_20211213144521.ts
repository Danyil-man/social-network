import { GetAllPostsType } from "../api/api"
import { InfernActiontype } from "../redux/reduxStore"

const GET_POSTS = "GET_POSTS";

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
    }
}

type ActionCreatorsType = InfernActiontype<typeof actions>

//                                          ACTION CREATOR

let actions = {
    getPosts: (posts:Array<GetAllPostsType>) => ({
        type: GET_POSTS,
        posts
    } as const)
}


export default postsReducer