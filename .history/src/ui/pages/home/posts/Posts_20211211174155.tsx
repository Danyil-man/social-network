import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetUserType } from "core/store/reducers/usersReducer";
import { AccountType, GetAccountType } from "core/store/api/api";

interface PostsType {
    users: Array<GetUserType>
    profile?: GetAccountType
    isLoading: boolean
    getProfileUser: (username: string) => void
    editProfile: (account: AccountType) => void
}

const Posts: FC<PostsType> = ({ users, profile, getProfileUser }) => {
    return (
        <div className={style.wrapper}>
            {users.map(user =>
                <Post
                    user={user}
                    profile={profile}
                    getProfileUser={getProfileUser}
                />)}

        </div>
    )
}

export default Posts;