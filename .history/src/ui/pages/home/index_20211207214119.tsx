import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useState } from 'react';
//import { useAuth } from 'core/hooks/useAuth';

type ContainerHomeType = {
    isAuth: boolean
}

type MapStateToPropsType = {
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

const mapDispatchToProps = (state: AppStateType) => ({

})

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, mapDispatchToProps)(IdxHome);
