import React, { FC } from "react";
import Stories from "./stories/Stories";
import home from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { removeUser } from '../../../core/store/redux/slice/userSlice';
import { Redirect } from "react-router";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { useAuth } from "../../../core/hooks/useAuth";



const Home = () => {
    const dispatch = useAppDispatch();
    const {isAuth, email} = useAuth()

    return isAuth ? (
        <div className={home.wrapper}>
             <div> 
                <button onClick={ ()=> dispatch(removeUser())}>
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
    ) : (
        <Redirect to="/login" />
    )
}

export default Home;