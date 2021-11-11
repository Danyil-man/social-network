import { createStore, combineReducers,applyMiddleware } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice';
import thunkMiddleware from "redux-thunk"
import 


let reducerPack = combineReducers({
    user: userReducer,
})

export const store = createStore(reducerPack, applyMiddleware(thunkMiddleware))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>