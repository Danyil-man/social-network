import React from "react"
import { ThunkAction } from "redux-thunk";
import { authAPI, profileAPI, ResultCodes } from "../api/api";
import { AppStateType, InfernActiontype } from "../redux/reduxStore";
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
    } as const)
}

//                                                  THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorsType>

export const setAuth =():ThunkType => async (dispatch) => {
    let response = await authAPI.me();
    if(response.data.resultCode === ResultCodes.Success){
        let {username, login, password, isAuth} = response.data.data.username
        dispatch(actions.setUserData(username, login, password, true))
    }
} 

export const reg = (username: string, login: string, password: string):ThunkType => async (dispatch) => {
    let response = await authAPI.reg(username, login, password);

}
























export default authReducer;