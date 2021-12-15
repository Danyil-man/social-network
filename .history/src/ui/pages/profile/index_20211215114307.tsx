import React, { FC, useEffect, useState } from "react";
import headerAva from "public/images/MiniProf/header__ava.png";
import Profile from "./profileContent/Profile";
import { connect } from "react-redux";
import { AppStateType } from "core/store/redux/reduxStore";
import { AccountType, GetAccountType, GetAllPostsType } from "core/store/api/api";
import { Redirect } from "react-router";
import { editProfile, getProfileUser } from "core/store/reducers/profileReducer";
import { getIsLoading } from "core/store/selectors";

type ContainerProfileType = {
    isAuth: boolean
    profile?: GetAccountType
    posts: Array<GetAllPostsType>
    editProfile: (account: AccountType) => void
    isLoading: boolean
    getProfileUser: (username: string) => void
}

const IdxProfile: FC<ContainerProfileType> = ({ isAuth, profile, posts, editProfile, getProfileUser, isLoading }) => {
    const usernameProf = profile?.username
    useEffect(() => {
        if (usernameProf) {
            getProfileUser(usernameProf)
        }
    }, [])

    return isAuth ? (
        <div>
            <Profile
                profile={profile}
                posts={posts}
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
    posts: state.posts.posts,
    isLoading: getIsLoading(state),
})



export default connect(mapStateToprops, { editProfile, getProfileUser })(IdxProfile);