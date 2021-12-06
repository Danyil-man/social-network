import { login } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { FC } from "react";
import { connect } from "react-redux";
import SignUp from "./SignUp";

type ContainerSignUPType = {
    isAuth: boolean
    login: () => void
}

const IdxSignUp: FC<ContainerSignUPType> = (props) => {
    return (
        <div>
            <SignUp
                login={props.login}
                isAuth={props.isAuth}
            />
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(IdxSignUp);
