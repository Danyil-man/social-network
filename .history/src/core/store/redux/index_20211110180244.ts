import { configureStore, createStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice';

let reducerPack = combineReducers({
    user: userReducer,
})

export const

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>