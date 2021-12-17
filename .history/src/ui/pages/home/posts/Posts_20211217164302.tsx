import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetUserType } from "core/store/reducers/usersReducer";
import { AccountType, GetAccountType, GetAllComments, GetAllPostsType } from "core/store/api/api";
import { objectTraps } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import Preloader from "ui/components/common/Preloader";

interface PostsType {
    profile?: GetAccountType
    posts: Array<GetAllPostsType>
    isLoading: boolean
    comments: Array<GetAllComments>
    getProfileUser: (username: string) => void
    editProfile: (account: AccountType) => void
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
    getAllComments: (postId: number) => void
    getPost: (postId: number) => void
}

const Posts: FC<PostsType> = ({ profile, posts,
    getProfileUser, editProfile,
    isLoading, likePost,
    removelikePost, getAllComments,
    getPost, comments }) => {

    return (
        <div className={style.wrapper}>
            {isLoading ? <Preloader /> : null}
            {posts.map(post => <Post
                profile={profile}
                post={post}
                comments={comments}
                getProfileUser={getProfileUser}
                editProfile={editProfile}
                likePost={likePost}
                removelikePost={removelikePost}
                getAllComments={getAllComments}
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