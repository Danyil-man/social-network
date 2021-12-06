import { login } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { FC } from "react";
import { connect } from "react-redux";
import SignUp from "./SignUp";

type ContainerSignUPType = {
    login: () => void
}

const IdxSignUp: FC<ContainerSignUPType> = ({ }) => {
    return (
        <div>
            <SignUp
                login={ }

            />
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(IdxSignUp);
