import React from "react"
const SET_USER_DATA = "SET_USER_DATA";

type InitialStateType = {
    username: string | null,
    login: string | null,
    password: string | null,
    isAuth: boolean
}

const initialState: InitialStateType = {
    username: null,
    login: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case SET_USER_DATA: 
        return{
            ...state,
            ...action.data
        }

        default:
            return state
    }
}



























export default authReducer;