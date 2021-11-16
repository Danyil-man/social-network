import React, { useState } from "react";
import Stories from "./stories/Stories";
import home from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";

interface Homeprops {
    photo: string;
}

const Home = (props: Homeprops) => {
    return (
        <div className={home.wrapper}>
            <div>
            </div>
            <div className={home.content}>
                <div className={home.lefside}>
                    <Stories />
                    <Posts photo={props.photo} />
                </div>
                <div className={home.rightside}>
                    <MiniProfile />
                </div>
            </div>
        </div>
    )
}

export default Home;