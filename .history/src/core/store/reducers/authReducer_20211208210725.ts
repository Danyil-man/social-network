import React from "react";
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../api/api";
import { AppStateType, InfernActiontype } from "../redux/reduxStore";
import { getProfile } from "./profileReducer";
const SET_USER_DATA = "SET_USER_DATA";
const GET_USER_DATA = "GET_USER_DATA";
const DELETE_USER_DATA = "DELETE_USER_DATA";

interface InitialStateType {
  username?: string ;
  login?: string ;
  password?: string;
  isAuth: boolean;
}

const initialState: InitialStateType = {
  username: undefined,
  login: undefined,
  password: undefined,
  isAuth: false,
};

//                                         REDUCER

const authReducer = (
  state = initialState,
  action: ActionCreatorsType
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        username: action.data.username,
        login: action.data.login,
        password: action.data.password,
        isAuth: true,
      };

    case GET_USER_DATA:
    return{
        ...state,
        login: action.data.login,
        password: action.data.password,
        isAuth: true,
    };
    default:
      return state;
  }
};

//                                           ACTION CREATORS

type ActionCreatorsType = InfernActiontype<typeof actions>;

export const actions = {
  setUserData: (
    username?: string,
    login?: string,
    password?: string,
    isAuth?: boolean
  ) =>
    ({
      type: SET_USER_DATA,
      data: { username, login, password, isAuth },
    } as const),

  getUserData: (
    login: string | undefined ,
    password: string | undefined,
    isAuth: boolean | undefined
  ) =>
    ({
      type: GET_USER_DATA,
      data: { login, password, isAuth },
    } as const),
};

//                                                  THUNK

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionCreatorsType
>;

export const registration =
  (username: string, login: string, password: string): ThunkType =>
  async (dispatch) =>
    authAPI.reg(username, login, password).then((response) => {
      // TODO: Show alert with response.success and then redirect to '/login'
      if(response.data.success){
        dispatch(actions.setUserData(username, login, password, true))
        alert(response.data.success)
      } else {
        alert("Incorrect Data")
      }
    });

export const logIn =
  (login: string, password: string): ThunkType =>
  async (dispatch) => {
    let response = await authAPI.login(login, password);
    if(response.data.success){
      dispatch(actions.getUserData(login, password, true));
      alert(response.data.success)
      getProfile()
    } else {
      alert('Incorrect Email or Password')
    }
  };

export const logOut = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout().then(response => {
    if(response.data.success === "Your account has been created"){
      dispatch(actions.getUserData(undefined, undefined, false))
    }
  })
  
};

export default authReducer;
