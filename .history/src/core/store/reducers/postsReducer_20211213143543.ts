import { GetAllPostsType } from "../api/api"
import { InfernActiontype } from "../redux/reduxStore"

type initialStateType = {
    posts: Array<GetAllPostsType>
    isLoading: boolean
}

let initialState:initialStateType = {
    posts: [],
    isLoading: false
}



const postsReducer = (state = initialState, action:any):initialStateType => {
    switch(action.type){
        case GET_POSTS: 
        return{
            ...state,
            posts: action.posts
        }
    }
}

type ActionCreatorsType = InfernActiontype<typeof actions>

export default postsReducer