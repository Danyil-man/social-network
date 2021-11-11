import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice';

export const store = configureStore({
    reducer: {
        u: userReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>