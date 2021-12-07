import React from "react";
import { ThunkAction } from "redux-thunk";
import { authAPI, GetAccountType, profileAPI } from "../api/api";
import { AppStateType, InfernActiontype } from "../redux/reduxStore";
const SET_USER_DATA = "SET_USER_DATA";
const GET_USER_DATA = "GET_USER_DATA";

interface InitialStateType {
  username?: string;
  login?: string;
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
    login: string,
    password: string,
    isAuth: boolean
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
      if(response.data.success === "Your account has been created"){
        //alert('Accout Created')
        dispatch(actions.setUserData(username, login, password, true))
      } else {
        alert("Incorrect Data")
      }
    });

export const logIn =
  (login: string, password: string): ThunkType =>
  async (dispatch) => {
    let response = await authAPI.login(login, password);
    let messageCheck = response.data.success === "You have been logged in" 
    if(messageCheck){
      dispatch(actions.getUserData(login, password, true));
    } else if(!messageCheck){
     alert("Incorrect Email or Password")
    } 
  };

export const logOut = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data === 0) {
    dispatch(actions.setUserData(undefined, undefined, undefined, false));
  } 
};

export default authReducer;
