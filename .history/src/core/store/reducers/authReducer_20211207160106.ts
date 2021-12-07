import React from "react"
import { ThunkAction } from "redux-thunk";
import { authAPI, GetAccountType, profileAPI } from "../api/api";
import { AppStateType, InfernActiontype } from "../redux/reduxStore";
const SET_USER_DATA = "SET_USER_DATA";
const GET_USER_DATA = "GET_USER_DATA";

type InitialStateType = {
    username?: string,
    login?: string,
    password?: string,
    isAuth?: boolean
}

const initialState: InitialStateType = {
    username: undefined,
    login: undefined,
    password: undefined,
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

        // case GET_USER_DATA: 
        // return{
        //     ...state,
        //     ...action.data
        // }

        default:
            return state
    }
}

//                                           ACTION CREATORS

type ActionCreatorsType = InfernActiontype<typeof actions>

export const actions = {
    setUserData: (username?: string, login?: string, password?: string, isAuth?: boolean) => ({
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

// export const setAuth = ():ThunkType => async (dispatch) => {
//     let response = await profileAPI.getAccount()
//     let {username, login, password} = response.data
//     dispatch(actions.setUserData(username, login, password, true))
// }

export const registration = (username: string, login: string, password: string):ThunkType => async (dispatch) => {
    let response = await authAPI.reg(username, login, password).then( response => {
        let {username, login, password} = response.data.data
        dispatch(actions.setUserData(username, login, password, true))
    })
}

export const logIn = (login: string, password:string):ThunkType => async (dispatch) => {
    let response = await authAPI.login(login, password);
    dispatch(actions.getUserData(login, password, true))
}

export const logOut = ():ThunkType => async (dispatch) => {
    let response = await authAPI.logout();
    if(response.data === 0){
        dispatch(actions.setUserData(undefined, undefined, undefined, false))
    }
}


export default authReducer;