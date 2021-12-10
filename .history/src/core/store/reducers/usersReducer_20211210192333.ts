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

const userReducer = (state = initialState, action: ActionCreatorType) => {
    switch (action.type) {

    }
}

export const actions = {

}



type ActionCreatorType = InfernActiontype<typeof actions>