import { configureStore, createStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice';

export const store = createStore(
    combineReducers({

    })
    {
    {
        ,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>