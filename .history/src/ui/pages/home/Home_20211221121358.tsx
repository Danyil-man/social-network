import React, { FC, useState } from "react";
import Stories from "./stories/Stories";
import style from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { AccountType, GetAccountType, GetAllComments, GetAllPostsType, GetSinglePostType } from "core/store/api/api";
import { GetUserType } from "core/store/reducers/usersReducer";
import Preloader from "ui/components/common/Preloader";

type Homeprops = {
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    posts: Array<GetAllPostsType>
    comments: Array<GetAllComments>
    singlePosts: Array<GetSinglePostType>
    editProfile: (account: AccountType) => void
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
    getAllComments: (postId: number) => void
    getPost: (postId: number) => void
    getPostsOfSingleUser: (username: string) => void
    getProfileUser: (username: string) => void
    setComment: (message: string) => void
}

const Home: FC<Homeprops> = ({ profile, isLoading,
    users, posts, singlePosts,
    editProfile, getProfileUser,
    likePost, removelikePost,
    getAllComments, comments,
    getPost, getPostsOfSingleUser,
    setComment }) => {
    return (
        <div className={style.wrapper}>
            {isLoading ? <Preloader /> : null}
            <div className={style.content}>
                <div className={style.lefside}>
                    <Stories
                        users={users}
                    />
                    <Posts
                        isLoading={isLoading}
                        posts={posts}
                        comments={comments}
                        profile={profile}
                        singlePosts={singlePosts}
                        getProfileUser={getProfileUser}
                        editProfile={editProfile}
                        likePost={likePost}
                        removelikePost={removelikePost}
                        getAllComments={getAllComments}
                        getPost={getPost}
                        getPostsOfSingleUser={getPostsOfSingleUser}
                        setComment={setComment}
                    />
                </div>
                <div className={style.rightside}>
                    <MiniProfile
                        profile={profile}
                        isLoading={isLoading}
                        editProfile={editProfile}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;