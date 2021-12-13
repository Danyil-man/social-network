import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
import { AccountType, GetAccountType } from 'core/store/api/api';
import { getIsLoading, getUsersSelector } from 'core/store/selectors';
import { editProfile, getProfileUser, } from 'core/store/reducers/profileReducer';
import { getUsers, GetUserType } from 'core/store/reducers/usersReducer';


type ContainerHomeType = {
    isAuth: boolean
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    userData?: GetUserType
    editProfile: (account: AccountType) => void
    getUsers: () => void
    getProfileUser: (username: string) => void
}


const IdxHome: FC<ContainerHomeType> = ({ isAuth, profile, isLoading, users, userData, editProfile, getUsers, getProfileUser }) => {
    console.log(getProfileUser)

    return isAuth ? (
        <div>
            <Home
                profile={profile}
                isLoading={isLoading}
                users={users}
                userData={userData}
                editProfile={editProfile}
                getUsers={getUsers}
                getProfileUser={getProfileUser}
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
    users: getUsersSelector(state),
    userData: state.profile.userData
})



export default connect(mapStateToProps, { editProfile, getUsers, getProfileUser })(IdxHome);
