import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetAllComments, GetAllPostsType } from "core/store/api/api";
import Preloader from "ui/components/common/Preloader";

interface PostsType {
    posts: Array<GetAllPostsType>
    isLoading: boolean
    comments: Array<GetAllComments>
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
    getAllComments: (postId: number) => void
    getPost: (postId: number) => void
    getPostsOfSingleUser: (username: string) => void
    getProfileUser: (username: string) => void
    setComment: (postId: number, message: string) => void
}

const Posts: FC<PostsType> = ({ posts, isLoading, comments,
    getProfileUser,
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