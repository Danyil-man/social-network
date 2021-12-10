import React, { FC, useState } from "react";
import Stories from "./stories/Stories";
import style from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { AccountType, GetAccountType } from "core/store/api/api";

type Homeprops = {
    profile?: GetAccountType
    isLoading: boolean
    editProfile: (account: AccountType) => void
    getUsers: () => void
}

const Home: FC<Homeprops> = ({ profile, isLoading, editProfile }) => {

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.lefside}>
                    <Stories />
                    <Posts />
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