import React from "react";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InfernActiontype } from "../redux/reduxStore";

const SET_USER = "SET_USER";

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
        default:
            return state
    }
}

//                                      ACTION CREATORS

export const actions = {
    setUsers: (users: Array<GetUserType>) => ({
        type: SET_USER,
        users
    } as const)
}

//                                          THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>



type ActionCreatorType = InfernActiontype<typeof actions>












export default userReducer