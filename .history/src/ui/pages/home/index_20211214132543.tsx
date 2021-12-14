import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useEffect, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
import { AccountType, GetAccountType, GetAllPostsType } from 'core/store/api/api';
import { getIsLoading, getUsersSelector } from 'core/store/selectors';
import { editProfile, getProfileUser, } from 'core/store/reducers/profileReducer';
import { getUsers, GetUserType } from 'core/store/reducers/usersReducer';


type ContainerHomeType = {
    isAuth: boolean
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    posts: Array<GetAllPostsType>
    editProfile: (account: AccountType) => void
    getUsers: () => void
    getProfileUser: (username: string) => void
}



const IdxHome: FC<ContainerHomeType> = ({ isAuth, profile, isLoading, users, posts, editProfile, getUsers, getProfileUser }) => {
    const [usersState, setUsersState] = useState([])

    useEffect(() => {
        setUsersState(getUsers())
    }, [])

    return isAuth ? (
        <div>
            <Home
                profile={profile}
                isLoading={isLoading}
                users={users}
                posts={posts}
                editProfile={editProfile}
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
    posts: state.posts.posts,
    isLoading: getIsLoading(state),
    users: getUsersSelector(state),
    //userData: state.profile.userData
})



export default connect(mapStateToProps, { editProfile, getUsers, getProfileUser })(IdxHome);
