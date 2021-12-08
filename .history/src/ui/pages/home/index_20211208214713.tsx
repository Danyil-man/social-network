import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
//import { useAuth } from 'core/hooks/useAuth';

type ContainerHomeType = {
    isAuth: boolean
}

const IdxHome: FC<ContainerHomeType> = (props) => {

    return props.isAuth ? (
        <div>
            <Home
                isAuth={props.isAuth}
            />
        </div>
    )
        : (
            <Redirect to="/signup" />
        )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    profile: state.profile.profile
})

export default connect(mapStateToProps)(IdxHome);
