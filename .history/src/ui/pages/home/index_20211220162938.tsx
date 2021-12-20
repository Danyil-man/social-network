import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useEffect, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
import { AccountType, GetAccountType, GetAllComments, GetAllPostsType, GetSinglePostType } from 'core/store/api/api';
import { getIsLoading, getUsersSelector } from 'core/store/selectors';
import { editProfile, getProfile, } from 'core/store/reducers/profileReducer';
import { getProfileUser, getUsers, GetUserType } from 'core/store/reducers/usersReducer';
import { getAllComments, getAllPosts, getPost, getPostsOfSingleUser, likePost, removelikePost } from 'core/store/reducers/postsReducer';

type ContainerHomeType = {
    isAuth: boolean
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    posts: Array<GetAllPostsType>
    comments: Array<GetAllComments>
    singlePosts: Array<GetSinglePostType>
    currentPage: number
    editProfile: (account: AccountType) => void
    getProfileUser: (username: string) => void
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
    getAllComments: (postId: number) => void
    getPost: (postId: number) => void
    getPostsOfSingleUser: (username: string) => void
}



const IdxHome: FC<ContainerHomeType> = ({ isAuth, profile,
    isLoading, users,
    posts, comments,
    singlePosts, currentPage,
    editProfile, getProfileUser,
    likePost, removelikePost,
    getAllComments, getPost,
    getPostsOfSingleUser,

}) => {

    useEffect(() => {
        getAllPosts(currentPage)
    }, [])

    return isAuth ? (
        <div>
            <Home
                profile={profile}
                isLoading={isLoading}
                users={users}
                posts={posts}
                comments={comments}
                singlePosts={singlePosts}
                editProfile={editProfile}
                getProfileUser={getProfileUser}
                likePost={likePost}
                removelikePost={removelikePost}
                getAllComments={getAllComments}
                getPost={getPost}
                getPostsOfSingleUser={getPostsOfSingleUser}
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
    comments: state.posts.comments,
    singlePosts: state.posts.singlePosts,
    currentPage: state.posts.currentPage,
    isLoading: getIsLoading(state),
    users: getUsersSelector(state),
})



export default connect(mapStateToProps, {
    editProfile, getUsers,
    getProfile, getProfileUser,
    getAllPosts, likePost,
    removelikePost, getAllComments,
    getPost, getPostsOfSingleUser
})(IdxHome);
