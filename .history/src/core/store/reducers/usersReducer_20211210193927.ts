import React from "react";
import { ThunkAction } from "redux-thunk";
import { UsersAPI } from "../api/api";
import { AppStateType, InfernActiontype } from "../redux/reduxStore";

const SET_USER = "SET_USER";
const SET_IS_LOADING = "SET_IS_LOADING";

export type GetUserType = {
    username: string;
    description: null;
    first_name: null;
    followers: number;
    following: number;
    job_title: null;
    last_name: null;
    profile_photo_url: null;
};

type initialStateType = {
    users: Array<GetUserType>
    isLoading: boolean
}

let initialState: initialStateType = {
    users: [],
    isLoading: false
}

//                                       REDUCER

const userReducer = (state = initialState, action: ActionCreatorType): initialStateType => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: action.users
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

//                                      ACTION CREATORS

export const actions = {
    setUsers: (users: Array<GetUserType>) => ({
        type: SET_USER,
        users
    } as const),

    isLoading: (isLoading: boolean) => ({
        type: SET_IS_LOADING,
        isLoading
    } as const)
}

//                                          THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>

export const getUsers = (): ThunkType => async (dispatch) => {
    dispatch(actions.isLoading(true))

    let response = await UsersAPI.getUsers()
    dispatch(actions.isLoading(false))
}



type ActionCreatorType = InfernActiontype<typeof actions>












export default userReducer