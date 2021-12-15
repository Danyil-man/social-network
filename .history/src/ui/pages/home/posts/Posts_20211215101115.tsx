import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetUserType } from "core/store/reducers/usersReducer";
import { AccountType, GetAccountType, GetAllPostsType } from "core/store/api/api";
import { objectTraps } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import Preloader from "ui/components/common/Preloader";

interface PostsType {
    profile?: GetAccountType
    posts: Array<GetAllPostsType>
    isLoading: boolean
    getProfileUser: (username: string) => void
    editProfile: (account: AccountType) => void
}

const Posts: FC<PostsType> = ({ profile, posts, getProfileUser, editProfile, isLoading }) => {
    console.log('posts Posts:', posts)

    return (
        <div className={style.wrapper}>
            {isLoading ? <Preloader /> : null}
            {posts.map(post => <Post
                profile={profile}
                post={post}
                getProfileUser={getProfileUser}
                editProfile={editProfile}
                isLoading={isLoading}
            />)}
            {/* {users.map(user => <Post
                user={user}
                profile={profile}
                posts={posts}
                getProfileUser={getProfileUser}
                editProfile={editProfile}
                isLoading={isLoading}
            />)} */}
            {/* {posts.map((post, index) => {
                const userItem = users[index]
                return (
                    <Post
                        userItem={userItem}
                        profile={profile}
                        //posts={posts}
                        post={post}
                        getProfileUser={getProfileUser}
                        editProfile={editProfile}
                        isLoading={isLoading}
                    //postsItem={postsItem}
                    />
                )
            }
            )} */}
        </div>
    )
}

//obj.map(key => key.posts.map(_key => {}))

export default Posts;