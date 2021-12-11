import { createSelector } from "reselect"
import { AppStateType } from "./redux/reduxStore"

export const getIsLoading = (state: AppStateType) => {
    return state.auth.isLoading
}

const getUsers = (state: AppStateType) => {
    return state.users.users
}


export const getUsersSelector = createSelector(getUsers, (users) => {
    return users
    
})