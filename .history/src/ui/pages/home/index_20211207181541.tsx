import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
//import { useAuth } from 'core/hooks/useAuth';



const IdxHome = () => {


    return ? (
        <div>
            <Home />
        </div>
    )
        : (
            <Redirect to="/signup" />
        )
}


const mapStateToProps = (state: AppStateType) => {
    isAuth: state.auth.isAuth
}

export default IdxHome;
