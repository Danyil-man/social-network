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
    userName: string
    editProfile: (account: AccountType) => void
    getUsers: () => void
    getProfileUser: (username: string) => void
}


const IdxHome: FC<ContainerHomeType> = ({ isAuth, profile, isLoading, users, userName, editProfile, getUsers, getProfileUser }) => {
    console.log(getProfileUser)
    let username = userName
    if (!username) {
        username = userName
    }
    return isAuth ? (
        <div>
            <Home
                profile={profile}
                isLoading={isLoading}
                users={users}
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
    userName: state.auth.username, //take user
})



export default connect(mapStateToProps, { editProfile, getUsers, getProfileUser })(IdxHome);
