import React from "react"
import { ThunkAction } from "redux-thunk";
import { AccountType, GetAccountType, profileAPI } from "../api/api"
import { AppStateType, InfernActiontype } from "../redux/reduxStore";

//                              TYPE
const SET_PROFILE = "SET_PROFILE";


type InitialStateType = {
    profile?: GetAccountType
}

const initialState:InitialStateType = {
    profile: undefined
}

//                              REDUCER

const profileReducer = (state = initialState, action:ActionCreatorsType):InitialStateType => {
    switch(action.type){
        case SET_PROFILE: {
            return {
            ...state,
            profile: action.profile
            }
        }


        default:
            return state
    }
}

type ActionCreatorsType = InfernActiontype<typeof actions>

//                              ACTION CREATOR

export const actions = {
    setProfileData: (profile: GetAccountType) => ({
        type:SET_PROFILE,
        profile: profile
    }as const)
}

//                                  THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

export const getProfile = ():ThunkType => async (dispatch) => {
    let response = await profileAPI.getAccount();
    dispatch(actions.setProfileData(response.data))
}

export const editProfile = (username:string, description:string, first_name:string, last_name:string, job_title:string):ThunkType => async (dispatch) => {
    let response = await profileAPI.editAccount(username, description, first_name, last_name, job_title)
    dispatch(getProfile())
}

export default profileReducer