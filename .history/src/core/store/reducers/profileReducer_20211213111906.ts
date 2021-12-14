import React from "react"
import { ThunkAction } from "redux-thunk";
import { AccountType, GetAccountType, profileAPI } from "../api/api"
import { AppStateType, InfernActiontype } from "../redux/reduxStore";
import { GetUserType } from "./usersReducer";

//                              TYPE
const SET_PROFILE = "SET_PROFILE";
const SET_IS_LOADING = "IS_LOADING"
const SET_USER = "SET_USER";


type InitialStateType = {
    profile?: GetAccountType
    user?: GetUserType
    isLoading: boolean
}

const initialState: InitialStateType = {
    profile: undefined,
    user: undefined,
    isLoading: false
}

//                              REDUCER

const profileReducer = (state = initialState, action: ActionCreatorsType): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

            case SET_USER: 
            return{
                ...state,
                user: action.user
            }


        default:
            return state
    }
}

type ActionCreatorsType = InfernActiontype<typeof actions>

//                              ACTION CREATOR

export const actions = {
    setProfileData: (profile: GetAccountType) => ({
        type: SET_PROFILE,
        profile: profile
    } as const),
    setIsLoading: (isLoading: boolean) => ({
        type: SET_IS_LOADING,
        isLoading
    } as const),
    setUserData: (user: GetUserType)=>({
        type:SET_USER,
        user: user
    } as const)

}

//                                  THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

export const getProfile = (): ThunkType => async (dispatch) => {
    let response = await profileAPI.getAccount();
    dispatch(actions.setProfileData(response.data))
}

export const editProfile = (account: AccountType): ThunkType => async (dispatch) => {
    dispatch(actions.setIsLoading(true))
    let response = await profileAPI.editAccount(account)
    dispatch(getProfile())
    dispatch(actions.setIsLoading(false))
}

export const getProfileUser=(username: string):ThunkType => async (dispatch) => {
    debugger
    dispatch(actions.setIsLoading(true))
    let response = await profileAPI.getSingleProfile(username)
    dispatch(actions.setUserData(response.data))
    dispatch(actions.setIsLoading(false))
}

export default profileReducer