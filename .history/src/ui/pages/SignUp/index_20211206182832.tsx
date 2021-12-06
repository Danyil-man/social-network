import { registration } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { FC } from "react";
import { connect } from "react-redux";
import SignUp from "./SignUp";

type ContainerSignUPType = {
    isAuth: boolean
    registration: () => void
}

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {

}

const IdxSignUp: FC<ContainerSignUPType> = (props) => {
    return (
        <div>
            <SignUp
                registration={props.login}
                isAuth={props.isAuth}
            />
        </div>
    );
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { registration })(IdxSignUp);
