import React, { FC } from "react";
import Stories from "./stories/Stories";
import home from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";




const Home = () => {
    return (
        <div className={home.wrapper}>
             <div> 
                <button onClick={ ()=> dispatch(removeUser())}>
                    Log out as {email}
                </button>
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
    ) : (
        <Redirect to="/login" />
    )
}

export default Home;