import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
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

const mapDispatchToProps = (state: AppStateType) => ({

})

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, mapDispatchToProps)(IdxHome);
