import axios from "axios";
import React from "react";
import { ThunkAction } from "redux-thunk";
import { authAPI, instanceApi, profileAPI } from "../api/api";
import { AppStateType, InfernActiontype } from "../redux/reduxStore";
import { getAllComments, getAllPosts } from "./postsReducer";
import { getProfile } from "./profileReducer";
import { getUsers } from "./usersReducer";
const SET_USER_DATA = "SET_USER_DATA";
const GET_USER_DATA = "GET_USER_DATA";
const SET_IS_LOADING = "IS_LOADING"

interface InitialStateType {
  username?: string;
  login?: string;
  password?: string;
  isAuth: boolean;
  isLoading: boolean
}

const initialState: InitialStateType = {
  username: undefined,
  login: undefined,
  password: undefined,
  isAuth: false,
  isLoading: false
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
      return {
        ...state,
        login: action.data.login,
        password: action.data.password,
        isAuth: true,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }

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
    login: string | undefined,
    password: string | undefined,
    isAuth: boolean | undefined
  ) =>
  ({
    type: GET_USER_DATA,
    data: { login, password, isAuth },
  } as const),

  setIsLoading: (isLoading: boolean) => ({
    type: SET_IS_LOADING,
    isLoading
  } as const)
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
    async (dispatch) => {
      dispatch(actions.setIsLoading(true))
      let response = await authAPI.reg(username, login, password)
      if (response.data.success) {
        let token = response.config.headers.Authorization
        dispatch(actions.setUserData(username, login, password, true))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.setItem('token', response.data.data.token)
        dispatch(actions.getUserData(login, password, true));
        debugger
        //localStorage.setItem('token', token)
        dispatch(getProfile())
        dispatch(getUsers()) //Set Users
        //dispatch(getAllPosts()) //Set Posts 
        //alert(response.data.success)
        dispatch(actions.setIsLoading(false))
      } else {
        alert("Incorrect Data")
      }
    }

export const logIn =
  (login: string, password: string): ThunkType =>
    async (dispatch) => {
      dispatch(actions.setIsLoading(true))
      let response = await authAPI.login(login, password)
      if (response) {
        dispatch(actions.getUserData(login, password, true));
        //let token = response.config.headers.Authorization
        //localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.setItem('token', response.headers.authorization)
        debugger
        dispatch(getProfile()) //Request to Set Profile Data
        dispatch(getUsers()) // Response Users List
        //dispatch(getAllPosts()) //Set Posts 
        //alert(response.data.success)
        dispatch(actions.setIsLoading(false))
      } else {
        alert('Incorrect Email or Password')
      }
    };

export const logOut = (): ThunkType => async (dispatch) => {
 // let token = response.config.headers?.Authorization
  //localStorage.removeItem('token', token)
  //debugger
  //'Bearer '
};

export default authReducer;
