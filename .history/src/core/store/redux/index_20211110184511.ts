import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice';
im
import thunkMiddleware from 'redux-thunk';


let reducerPack = combineReducers({
    user: userReducer,
    modal: modalReducer
})

export const store = createStore(reducerPack, applyMiddleware(thunkMiddleware))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>