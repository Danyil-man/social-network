import React, { useEffect } from "react";
import { logIn } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { FC } from "react";
import { connect } from "react-redux";
import LogIn from "./LogIn";
import { getIsLoading } from "core/store/selectors";
import Preloader from "ui/components/common/Preloader";

type ContainerLogInType = {
    isAuth: boolean;
    logIn: (login: string, password: string) => void;
    isLoading: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
    isLoading: boolean
}

type MapDispatchToPropsType = {
    logIn: (login: string, password: string) => void;
}

const IdxLogIn: FC<ContainerLogInType> = (props) => {
    return (
        <div>
            {props.isLoading ? <Preloader /> : null}
            <LogIn
                isAuth={props.isAuth}
                logIn={props.logIn}
            />
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    isLoading: getIsLoading(state)
})


export default connect<MapStateToPropsType, MapDispatchToPropsType, ContainerLogInType, AppStateType>(mapStateToProps, { logIn })(IdxLogIn);
