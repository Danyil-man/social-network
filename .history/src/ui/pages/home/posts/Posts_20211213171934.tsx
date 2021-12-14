import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetUserType } from "core/store/reducers/usersReducer";
import { AccountType, GetAccountType, GetAllPostsType } from "core/store/api/api";
import { objectTraps } from "@reduxjs/toolkit/node_modules/immer/dist/internal";

interface PostsType {
    users: Array<GetUserType>
    profile?: GetAccountType
    posts: Array<GetAllPostsType>
    // userData?: GetUserType
    isLoading: boolean
    getProfileUser: (username: string) => void
    editProfile: (account: AccountType) => void
}

const Posts: FC<PostsType> = ({ users, profile, posts, getProfileUser, editProfile, isLoading }) => {
    return (
        <div className={style.wrapper}>
            {Object.keys(users).map(key => {
                return (
                    <Post
                        key={key}
                        user={users}
                        profile={profile}
                        posts={posts}
                        getProfileUser={getProfileUser}
                        editProfile={editProfile}
                        isLoading={isLoading}
                    />
                )
            })}
        </div>
    )
}

//obj.map(key => key.posts.map(_key => {}))

export default Posts;