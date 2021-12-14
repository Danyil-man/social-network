import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetUserType } from "core/store/reducers/usersReducer";
import { AccountType, GetAccountType, GetAllPostsType } from "core/store/api/api";

interface PostsType {
    user: GetUserType
    profile?: GetAccountType
    posts: Array<GetAllPostsType>
    // userData?: GetUserType
    isLoading: boolean
    getProfileUser: (username: string) => void
    editProfile: (account: AccountType) => void
}

const Posts: FC<PostsType> = ({ user, profile, posts, getProfileUser, editProfile, isLoading }) => {
    return (
        <div className={style.wrapper}>
            {posts.map(post =>
                <Post
                    user={user}
                    profile={profile}
                    posts={posts}
                    //userData={userData}
                    getProfileUser={getProfileUser}
                    editProfile={editProfile}
                    isLoading={isLoading}
                />)}

        </div>
    )
}

export default Posts;