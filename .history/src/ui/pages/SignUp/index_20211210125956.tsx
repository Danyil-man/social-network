import { registration } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { getIsLoading } from "core/store/selectors";
import { FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Preloader from "ui/components/common/Preloader";
import SignUp from "./SignUp";

type ContainerSignUPType = {
    isAuth: boolean
    registration: (username: string, login: string, password: string) => void
    isLoading: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
    isLoading: boolean
}

type MapDispatchToPropsType = {
    registration: (username: string, login: string, password: string) => void;
}

const IdxSignUp: FC<ContainerSignUPType> = (props) => {
    return props.isAuth ? (
        <Redirect to={'/login'} />

    ) : (
        <div>
            {props.isLoading ? <Preloader /> : null}
            <SignUp
                registration={props.registration}
                isAuth={props.isAuth}
            />
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    isLoading: getIsLoading(state)
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, ContainerSignUPType, AppStateType>(mapStateToProps, { registration })(IdxSignUp);
