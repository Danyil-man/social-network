import React, { FC, useEffect, useState } from "react";
import headerAva from "public/images/MiniProf/header__ava.png";
import Profile from "./profileContent/Profile";
import { connect } from "react-redux";
import { AppStateType } from "core/store/redux/reduxStore";
import { AccountType, CreatePostType, GetAccountType, GetAllPostsType, GetSinglePostType } from "core/store/api/api";
import { Redirect } from "react-router";
import { editProfile } from "core/store/reducers/profileReducer";
import { getIsLoading } from "core/store/selectors";
import { getPostsOfSingleUser } from "core/store/reducers/postsReducer";

type ContainerProfileType = {
    isAuth: boolean
    profile: GetAccountType
    profilePosts: Array<GetSinglePostType>
    isLoading: boolean
    postItem: CreatePostType
    editProfile: (account: AccountType) => void
    getProfileUser: (username: string) => void
    getPostsOfSingleUser: (username: string | undefined) => void
}

const IdxProfile: FC<ContainerProfileType> = ({ isAuth, profile,
    profilePosts, editProfile, getPostsOfSingleUser,
    isLoading }) => {

    let username = profile.username
    useEffect(() => {
        getPostsOfSingleUser(username)
        console.log('user: ', username)
    }, [getPostsOfSingleUser, username])

    return isAuth ? (
        <div>
            <Profile
                profile={profile}
                profilePosts={profilePosts}
                editProfile={editProfile}
                isLoading={isLoading}
            />

        </div>
    ) : (
        <Redirect to='/signup' />
    )
}

const mapStateToprops = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    profile: state.profile.profile,
    profilePosts: state.posts.singlePosts,
    postItem: state.posts.postItem,
    isLoading: getIsLoading(state),
})

export default connect(mapStateToprops, { editProfile, getPostsOfSingleUser })(IdxProfile);