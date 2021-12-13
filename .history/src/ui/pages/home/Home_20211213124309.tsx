import React, { FC, useState } from "react";
import Stories from "./stories/Stories";
import style from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { AccountType, GetAccountType } from "core/store/api/api";
import { GetUserType } from "core/store/reducers/usersReducer";

type Homeprops = {
    profile?: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    userData: GetUserType
    editProfile: (account: AccountType) => void
    getUsers: () => void
    getProfileUser: (username: string) => void
}

const Home: FC<Homeprops> = ({ profile, isLoading, users, userData, editProfile, getUsers, getProfileUser }) => {

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.lefside}>
                    <Stories
                        users={users}
                        getUsers={getUsers}
                    />
                    <Posts
                        users={users}
                        getProfileUser={getProfileUser}
                        profile={profile}
                        editProfile={editProfile}
                        isLoading={isLoading}
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