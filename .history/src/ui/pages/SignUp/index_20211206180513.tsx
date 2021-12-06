import { login } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { FC } from "react";
import { connect } from "react-redux";
import SignUp from "./SignUp";

type ContainerSignUPType = {

}

const ContainerSignUp: FC<ContainerSignUPType> = (props) => {
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

export default connect(mapStateToProps, { login })(ContainerSignUp);
