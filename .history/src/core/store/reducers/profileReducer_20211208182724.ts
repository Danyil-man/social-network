import React from "react"
import { GetAccountType } from "../api/api"
import { InfernActiontype } from "../redux/reduxStore";

//                              TYPE
const SET_PROFILE = "SET_PROFILE";


type InitialStateType = {
    profile: GetAccountType | undefined
}

const initialState:InitialStateType = {
    profile: undefined
}

//                              REDUCER

const profileReducer = (state = initialState, action:any):InitialStateType => {
    switch(action.type){
        case SET_PROFILE:
            return {
               ...state,
                
            }


        default:
            return state
    }
}

type ActionCreatorsType = InfernActiontype<>

export const actions = {
    setProfile: (profile: GetAccountType) => {
        return{
            type:SET_PROFILE,
            profile: profile
        } as const
    }
}


export default profileReducer
