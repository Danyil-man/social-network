import { GetSinglePostType } from "core/store/api/api";
import { GetSingleUserType } from "core/store/reducers/usersReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import UserProfile from "./UserProfile";

type ContainerUserType = {
    user: GetSingleUserType
    userPosts: Array<GetSinglePostType>
    isAuth: boolean
}

const IdxUserProfile: FC<ContainerUserType> = ({ user, userPosts, isAuth }) => {
    return isAuth ? (
        <>
            <UserProfile
                user={user}
                userPosts={userPosts}
            />
        </>
    ) : (
        <Redirect to='/signup' />
    )
}

const mapStateToProps = (state: AppStateType) => ({
    user: state.users.singleUser,
    userPosts: state.posts.singlePosts,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(IdxUserProfile);