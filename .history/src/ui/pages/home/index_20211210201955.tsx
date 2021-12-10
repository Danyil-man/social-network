import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
import { AccountType, GetAccountType } from 'core/store/api/api';
import { getIsLoading, getUsersSelector } from 'core/store/selectors';
import { editProfile } from 'core/store/reducers/profileReducer';
import { getUsers, GetUserType } from 'core/store/reducers/usersReducer';


type ContainerHomeType = {
    isAuth: boolean
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    editProfile: (account: AccountType) => void
    getUsers: () => void
}

const IdxHome: FC<ContainerHomeType> = ({ isAuth, profile, isLoading, editProfile, getUsers }) => {
    return isAuth ? (
        <div>
            <Home
                profile={profile}
                isLoading={isLoading}
                editProfile={editProfile}
                getUsers={getUsers}
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
    isLoading: getIsLoading(state),
    users: getUsersSelector(state)
})



export default connect(mapStateToProps, { editProfile, getUsers })(IdxHome);
