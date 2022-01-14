import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetUserType } from "core/store/reducers/usersReducer";
import { AccountType, GetAccountType, GetAllComments, GetAllPostsType, GetSinglePostType } from "core/store/api/api";
import { objectTraps } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import Preloader from "ui/components/common/Preloader";

interface PostsType {
    profile?: GetAccountType
    posts: Array<GetAllPostsType>
    isLoading: boolean
    comments: Array<GetAllComments>
    singlePosts: Array<GetSinglePostType>
    editProfile: (account: AccountType) => void
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
    getAllComments: (postId: number) => void
    getPost: (postId: number) => void
    getPostsOfSingleUser: (username: string) => void
    getProfileUser: (username: string) => void
    setComment: (postId: number, message: string) => void
}

const Posts: FC<PostsType> = ({ profile, posts,
    isLoading, comments, singlePosts,
    editProfile, getProfileUser,
    likePost, removelikePost,
    getAllComments, getPost,
    getPostsOfSingleUser, setComment }) => {

    return (
        <div className={style.wrapper}>
            {isLoading ? <Preloader /> : null}
            {posts.map(post => <Post
                post={post}
                comments={comments}
                getProfileUser={getProfileUser}
                likePost={likePost}
                removelikePost={removelikePost}
                getAllComments={getAllComments}
                getPost={getPost}
                getPostsOfSingleUser={getPostsOfSingleUser}
                setComment={setComment}
                isLoading={isLoading}
            />)}
        </div>
    )
}

export default Posts;