import React, { useState } from "react";
import Stories from "./stories/Stories";
import home from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";

interface Homeprops {

}

const Home = (props: Homeprops) => {
    return (
        <div className={home.wrapper}>
            <div>
            </div>
            <div className={home.content}>
                <div className={home.lefside}>
                    <Stories />
                    <Posts />
                </div>
                <div className={home.rightside}>
                    <MiniProfile />
                </div>
            </div>
        </div>
    )
}

export default Home;