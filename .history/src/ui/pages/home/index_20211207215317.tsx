import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
//import { useAuth } from 'core/hooks/useAuth';

type ContainerHomeType = {
    isAuth: boolean
    logOut: () => void
}

type MapStateToPropsType = {
    isAuth: boolean
}

const IdxHome: FC<ContainerHomeType> = (props) => {

    return props.isAuth ? (
        <div>
            <Home
                isAuth={props.isAuth}
                logOut={props.logOut}
            />
        </div>
    )
        : (
            <Redirect to="/signup" />
        )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { logOut })(IdxHome);
