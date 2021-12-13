import { GetAllPostsType } from "../api/api"

type initialStateType = {
    posts: Array<GetAllPostsType>
    isLoading: boolean
}

let initialState = {
    posts: [],
    isLoading: false
}



const postsReducer = () => {


}

export default postsReducer