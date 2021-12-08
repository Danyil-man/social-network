import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "../reducers/authReducer";
import profileReducer from "../reducers/profileReducer";


const reducerPack = combineReducers({
    auth: authReducer,
    profile: profileReducer
})


type reducerPackType = typeof reducerPack;
export type AppStateType = ReturnType<reducerPackType>;


export type InfernActiontype<T> = T extends {[key: string]: (...args:any[]) => infer U} ? U : never
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducerPack,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store;