import { AppStateType } from "./redux/reduxStore"

export const getIsLoading = (state: AppStateType) => {
    return state.auth.isLoading
}

const getUsersSelector = (state: AppStateType) => {
    return state.users.users
}

export const getUsers = (getUsersSelector, (users) => {
    return users
})