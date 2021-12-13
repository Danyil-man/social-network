import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "../reducers/authReducer";
import postsReducer from "../reducers/postsReducer";
import profileReducer from "../reducers/profileReducer";
import userReducer from "../reducers/usersReducer";


const reducerPack = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    users: userReducer,
    posts: postsReducer
})


type reducerPackType = typeof reducerPack;
export type AppStateType = ReturnType<reducerPackType>;


export type InfernActiontype<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducerPack,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store;