import { GetSingleUserType } from "core/store/reducers/usersReducer";
import { AppStateType } from "core/store/redux/reduxStore";
import React, { FC } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

type ContainerUserType = {
    user: GetSingleUserType
}

const IdxUserProfile: FC<ContainerUserType> = ({ user }) => {
    return (
        <>
            <UserProfile
                user={user}
            />
        </>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    user: state.users.singleUser,
    userPosts: state.posts.singlePosts
})

export default connect(mapStateToProps)(IdxUserProfile);