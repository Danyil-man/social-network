import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
import { GetAccountType } from 'core/store/api/api';
//import { useAuth } from 'core/hooks/useAuth';

type ContainerHomeType = {
    isAuth: boolean
    profile?: GetAccountType
}

const IdxHome: FC<ContainerHomeType> = (props) => {

    return props.isAuth ? (
        <div>
            <Home
                isAuth={props.isAuth}
                profile={props.profile}
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

const mapDispatchToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(IdxHome);
