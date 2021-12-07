import React from "react";
import { logIn } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { FC } from "react";
import { connect } from "react-redux";
import LogIn from "./LogIn";

type ContainerLogInType = {
    isAuth: boolean
    logIn: (login: string, password: string) => void;
}



const IdxLogIn: FC<ContainerLogInType> = (props) => {
    return (
        <div>
            <LogIn
                isAuth={props.isAuth}
            />
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { logIn })(IdxLogIn);