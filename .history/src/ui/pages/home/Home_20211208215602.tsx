import React, { FC, useState } from "react";
import Stories from "./stories/Stories";
import style from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { GetAccountType } from "core/store/api/api";

type Homeprops = {
    profile?: GetAccountType
}

const Home: FC<Homeprops> = ({ profile }) => {

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
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;