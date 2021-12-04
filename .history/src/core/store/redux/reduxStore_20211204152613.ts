import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";


const reducerPack = combineReducers({

})


type reducerPackType = typeof reducerPack;
export type AppStateType = ReturnType<reducerPackType>;

const store = createStore(
    reducerPack,
    applyMiddleware(thunkMiddleware)
)

export default store;