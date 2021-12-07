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

})


export default connect()(IdxLogIn);
