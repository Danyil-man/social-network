import { AppStateType } from "core/store/redux/reduxStore";
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

export default IdxSignUp;
