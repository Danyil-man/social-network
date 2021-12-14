import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useEffect, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
import { AccountType, GetAccountType, GetAllPostsType } from 'core/store/api/api';
import { getIsLoading, getUsersSelector } from 'core/store/selectors';
import { editProfile, getProfile, getProfileUser, } from 'core/store/reducers/profileReducer';
import { getUsers, GetUserType } from 'core/store/reducers/usersReducer';
import { getAllPosts } from 'core/store/reducers/postsReducer';
import Preloader from 'ui/components/common/Preloader';


type ContainerHomeType = {
    isAuth: boolean
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    posts: Array<GetAllPostsType>
    editProfile: (account: AccountType) => void
    //getProfile: any

}



const IdxHome: FC<ContainerHomeType> = ({ isAuth, profile, isLoading, users, posts, editProfile }) => {
    //const [profileState, setProfileState] = useState(null)
    // const [postsState, setStatePosts] = useState([])

    // useEffect(() => {
    //     if (isAuth)
    //         setProfileState(getProfile)
    //     console.log('mounted Profile')
    // }, [getProfile, isAuth])
    return isAuth ? (
        <div>
            {isLoading ? <Preloader /> : null}
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
})



export default connect(mapStateToProps, { editProfile, getUsers, getProfile, getProfileUser, getAllPosts })(IdxHome);
