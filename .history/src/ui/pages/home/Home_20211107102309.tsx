import React, { FC } from "react";
import Stories from "./stories/Stories";
import home from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { deleteUser } from "@firebase/auth";

interface HomeProps {
    email: any;
    deleteUser: any;
}

const Home:FC<HomeProps> = ({email}) => {

    return (
        <div className={home.wrapper}>
             <div> 
                <button onClick={ ()=> deleteUser}>
                    Log out with {email}
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
    )
}

export default Home;