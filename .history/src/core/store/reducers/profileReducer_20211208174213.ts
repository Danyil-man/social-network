import React from "react"
import { GetAccountType } from "../api/api"

type ProfileType = {
    profile?: GetAccountType
}

const initialState:ProfileType = {
    profile: undefined
}