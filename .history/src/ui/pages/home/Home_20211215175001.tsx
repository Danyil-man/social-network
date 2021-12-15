import React, { FC, useState } from "react";
import Stories from "./stories/Stories";
import style from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { AccountType, GetAccountType, GetAllPostsType } from "core/store/api/api";
import { GetUserType } from "core/store/reducers/usersReducer";
import Preloader from "ui/components/common/Preloader";

type Homeprops = {
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    posts: Array<GetAllPostsType>
    editProfile: (account: AccountType) => void
    getProfileUser: (username: string) => void
    likePost: (postId: number) => void
    removelikePost: (postId: number) => void
}

const Home: FC<Homeprops> = ({ profile, isLoading, users, posts, editProfile, getProfileUser }) => {
    return (
        <div className={style.wrapper}>
            {isLoading ? <Preloader /> : null}
            <div className={style.content}>
                <div className={style.lefside}>
                    <Stories
                        users={users}
                    />
                    <Posts
                        getProfileUser={getProfileUser}
                        profile={profile}
                        editProfile={editProfile}
                        isLoading={isLoading}
                        posts={posts}
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