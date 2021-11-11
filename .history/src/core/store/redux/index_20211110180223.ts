import { configureStore, createStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice';

let reducerPack = combineReducers({
    user
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>