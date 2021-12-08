import React from "react"
import { GetAccountType } from "../api/api"

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
        case SET_PROFILE: {
            
        }


        default:
            return state
    }
}


export default profileReducer
