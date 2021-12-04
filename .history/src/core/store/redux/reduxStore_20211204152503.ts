import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";


const reducerPack = combineReducers({

})



const store = createStore(
    reducerPack,
    applyMiddleware(thunkMiddleware)

)