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

//                                         REDUCER

const authReducer = (state = initialState, action:any):InitialStateType => {
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

//                                           ACTION CREATORS

export const actions = {
    setUserData: (username: string | null, login: string | null, password: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA,
        data: {username, login, password, isAuth}
    } as const)
}


























export default authReducer;