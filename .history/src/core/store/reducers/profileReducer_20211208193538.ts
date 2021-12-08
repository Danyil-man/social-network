import React from "react"
import { ThunkAction } from "redux-thunk";
import { GetAccountType, profileAPI } from "../api/api"
import { AppStateType, InfernActiontype } from "../redux/reduxStore";

//                              TYPE
const SET_PROFILE = "SET_PROFILE";


type InitialStateType = {
    profile?: GetAccountType
    login: string
}

const initialState:InitialStateType = {
    profile: undefined
    login: undefined
}

//                              REDUCER

const profileReducer = (state = initialState, action:ActionCreatorsType):InitialStateType => {
    switch(action.type){
        case SET_PROFILE:
            return {
               ...state,
                login: action.profile?.email
            }


        default:
            return state
    }
}

type ActionCreatorsType = InfernActiontype<typeof actions>

//                              ACTION CREATOR

export const actions = {
    setProfileData: (profile?: GetAccountType) => ({
        type:SET_PROFILE,
        profile: profile
    }as const)
}

//                                  THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

export const getProfile = ():ThunkType => async (dispatch) => {
    let response = await profileAPI.getAccount();
    dispatch(actions.setProfileData(response.data.data))
}


export default profileReducer
