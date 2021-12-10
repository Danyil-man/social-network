import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
import { AccountType, GetAccountType } from 'core/store/api/api';
import { getIsLoading } from 'core/store/selectors';
import { editProfile } from 'core/store/reducers/profileReducer';
//import { useAuth } from 'core/hooks/useAuth';

type ContainerHomeType = {
    isAuth: boolean
    profile?: GetAccountType
    isLoading: boolean
    editProfile: (account: AccountType) => void
}

const IdxHome: FC<ContainerHomeType> = ({ isAuth, profile, isLoading, editProfile }) => {
    return isAuth ? (
        <div>
            <Home
                profile={profile}
                isLoading={isLoading}
                editProfile={editProfile}
            />
        </div>
    )
        : (
            <Redirect to="/signup" />
        )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    profile: state.profile.profile,
    isLoading: getIsLoading(state)
})



export default connect(mapStateToProps, { editProfile })(IdxHome);
