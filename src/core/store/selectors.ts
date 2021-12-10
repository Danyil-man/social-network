import { AppStateType } from "./redux/reduxStore"

export const getIsLoading = (state: AppStateType) => {
    return state.auth.isLoading
}