import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "../reducers/authReducer";


const reducerPack = combineReducers({
    auth: authReducer
})


type reducerPackType = typeof reducerPack;
export type AppStateType = ReturnType<reducerPackType>;


export type InfernActiontype<T> = T extends {[key: string]: (...args:any[]) => infer U} ? U : never

const store = createStore(
    reducerPack,
    applyMiddleware(thunkMiddleware)
)

export default store;