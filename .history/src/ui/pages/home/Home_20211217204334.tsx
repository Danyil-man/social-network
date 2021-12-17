import React, { FC, useState } from "react";
import Stories from "./stories/Stories";
import style from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { AccountType, GetAccountType, GetAllComments, GetAllPostsType } from "core/store/api/api";
import { GetUserType } from "core/store/reducers/usersReducer";
import Preloader from "ui/components/common/Preloader";

type Homeprops = {
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    posts: Array<GetAllPostsType>
    comments: Array<GetAllComments>
    editProfile: (account: AccountType) => void
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
    getAllComments: (postId: number) => void
    getPost: (postId: number) => void
    getPostsOfSingleUser: (username: string) => void
    getProfileUser: (username: string) => void
}

const Home: FC<Homeprops> = ({ profile, isLoading,
    users, posts,
    editProfile,
    likePost, removelikePost,
    getAllComments, comments,
    getPost, getPostsOfSingleUser }) => {
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
                        editProfile={editProfile}
                        likePost={likePost}
                        removelikePost={removelikePost}
                        getAllComments={getAllComments}
                        getPost={getPost}
                        getPostsOfSingleUser={getPostsOfSingleUser}
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