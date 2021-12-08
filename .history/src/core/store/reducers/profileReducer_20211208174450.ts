import React from "react"
import { GetAccountType } from "../api/api"

//                              TYPE

const SET_PROFILE = "SET_PROFILE";


type ProfileType = {
    profile?: GetAccountType
}

const initialState:ProfileType = {
    profile: undefined
}

//                              REDUCER

const profileReducer = (state = initialState, action:any) => {
    switch(action.type){
        case SET_PROFILE: {
            
        }
    }
}
