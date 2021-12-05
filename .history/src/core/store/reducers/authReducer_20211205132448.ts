import React from "react"


type InitialStateType = {
    username: string | null,
    login: string | null,
    password: string | null,
    isAuth: boolean
}

const initialState = {
    username: null,
    login: null,
    password: null,
    isAuth: false
}