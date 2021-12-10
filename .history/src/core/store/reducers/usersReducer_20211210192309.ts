import React from "react";
import { InfernActiontype } from "../redux/reduxStore";

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

const userReducer = (state = initialState, action: ActionCreator) => {
    switch (action.type) {

    }
}

export const actions = {

}



type ActionCreator = InfernActiontype<typeof actions>