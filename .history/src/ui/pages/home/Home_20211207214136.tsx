import React, { useState } from "react";
import Stories from "./stories/Stories";
import style from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";

type Homeprops = {
    isAuth: boolean
}

const Home = (props: Homeprops) => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.lefside}>
                    <Stories />
                    <Posts />
                </div>
                <div className={style.rightside}>
                    <MiniProfile />
                </div>
            </div>
        </div>
    )
}

export default Home;