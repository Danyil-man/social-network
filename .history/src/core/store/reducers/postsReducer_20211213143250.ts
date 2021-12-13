import { GetAllPostsType } from "../api/api"

type initialStateType = {
    posts: Array<GetAllPostsType>
    isLoading: boolean
}

let initialState:initialStateType = {
    posts: [],
    isLoading: false
}



const postsReducer = (state = initialState, action:any):initialStateType => {


}

export default postsReducer