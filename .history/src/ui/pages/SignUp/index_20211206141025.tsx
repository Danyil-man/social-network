import { login } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { connect } from "react-redux";
import SignUp from "./SignUp";

const IdxSignUp = () => {
    return (
        <div>
            <SignUp />
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(IdxSignUp);
