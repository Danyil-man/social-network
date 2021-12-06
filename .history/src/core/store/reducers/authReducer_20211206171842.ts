import React from "react"
import { ThunkAction } from "redux-thunk";
import { authAPI, profileAPI, ResultCodes } from "../api/api";
import { AppStateType, InfernActiontype } from "../redux/reduxStore";
const SET_USER_DATA = "SET_USER_DATA";
const GET_USER_DATA = "GET_USER_DATA"

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

const authReducer = (state = initialState, action:ActionCreatorsType):InitialStateType => {
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

type ActionCreatorsType = InfernActiontype<typeof actions>

export const actions = {
    setUserData: (username: string | null, login: string | null, password: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA,
        data: {username, login, password, isAuth}
    } as const),

    getUserData: (login: string | null, password: string | null, isAuth: boolean) => ({
        type: GET_USER_DATA,
        data: {login, password, isAuth}
    } as const ) 
}

//                                                  THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

// export const setAuth =():ThunkType => async (dispatch) => {
//     let response = await authAPI.me();
//     if(response.data.resultCode === ResultCodes.Success){
//         let {username, login} = response.data.data
//         dispatch(actions.setUserData(username, login, true))
//     }
// } 

export const registration = (username: string, login: string, password: string):ThunkType => async (dispatch) => {
    let response = await authAPI.reg(username, login, password);
    if(response.data.resultCode === ResultCodes.Success){
        let {username, login, password} = response.data.data
        dispatch(actions.setUserData(username, login, password, true))
    } else {
        let message = response.data.success.length > 0 ? response.data.success[0] : "Error";
        //dispatch({_error: message}) 
        console.log(message)
    }
}

export const login = (login: string, password:string):ThunkType => async (dispatch) => {
    let response = await authAPI.login(login, password);
    if(response.data.resultCode === ResultCodes.Success){
        dispatch(actions.getUserData(login, password, true))
    }else {
        let message = response.data.success.length > 0 ? response.data.success[0] : "Error";
        //dispatch({_error: message}) 
        console.log(message)
    }
}

export const logout = ():ThunkType => async (dispatch) => {
    let response = await authAPI.logout();
    if(response.data === 0){
        dispatch(actions.setUserData(null, null, null, false))
    }
}


export default authReducer;