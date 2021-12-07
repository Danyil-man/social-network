import { logIn } from "core/store/reducers/authReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import { connect } from "react-redux";
import LogIn from "./LogIn";

const IdxLogIn = () => {
    return (
        <div>
            <LogIn />
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { logIn })(IdxLogIn);
