import React, { FC } from "react";
import Stories from "./stories/Stories";
import home from "./Home.module.scss";
import Posts from "./posts/Posts";
import MiniProfile from "./miniProfile/MiniProfile";
import { deleteUser } from "@firebase/auth";
import { useAppDispatch } from '../../../core/hooks/redux-hooks';
import { useAuth } from "../../../core/hooks/useAuth";
import { removeUser } from '../../../core/store/redux/slice/userSlice';

const dispatch = useAppDispatch();
const deleteUser = dispatch(removeUser());
const {isAuth, email} = useAuth();


const Home = () => {

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