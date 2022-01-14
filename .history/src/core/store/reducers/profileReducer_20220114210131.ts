import React from "react"
import { ThunkAction } from "redux-thunk";
import { AccountType, GetAccountType, profileAPI } from "../api/api"
import { AppStateType, InfernActiontype } from "../redux/reduxStore";

//                              TYPE
const SET_PROFILE = "SET_PROFILE";
const SET_IS_LOADING = "IS_LOADING"

type InitialStateType = {
    profile: GetAccountType
    isLoading: boolean
}

export const initialState: InitialStateType = {
    profile: {
        username: undefined,
        description: undefined,
        email: undefined,
        first_name: undefined,
        followers: undefined,
        following: undefined,
        job_title: undefined,
        last_name: undefined,
        profile_photo_url: null,
    },
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

export default profileReducer
