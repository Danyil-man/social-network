import React from "react";
import { InfernActiontype } from "../redux/reduxStore";

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

const userReducer = (state = initialState, action: ActionCreatorType): initialStateType => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: action.users
            }
    }
}

export const actions = {
    setUsers: (users: Array<GetUserType>) => ({
        type: SET_USER,
        users
    } as const)
}



type ActionCreatorType = InfernActiontype<typeof actions>












export default userReducer