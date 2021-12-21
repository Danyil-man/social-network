import { GetUserType } from "core/store/reducers/usersReducer";
import React, { FC } from "react";
import style from "./Stories.module.scss";
import UserPhoto from 'public/images/withoutphoto.png'
import { Link } from "react-router-dom";
import { GetSinglePostType } from "core/store/api/api";

interface StoryProps {
    user: GetUserType
    singlePosts: Array<GetSinglePostType>
    getProfileUser: (username: string) => void
    getPostsOfSingleUser: (username: string) => void
}


const Story: FC<StoryProps> = ({ user, getProfileUser, getPostsOfSingleUser }) => {
    let username = user.username;
    const TakeUser = () => {
        getProfileUser(username)
        getPostsOfSingleUser(username)
        console.log("Username:", username)
        console.log('SinglePost:', singlePosts)
    }
    return (
        <div>
            <div className={style.item}>
                <Link to={`/user/${username}`}>
                    <img width={64} src={user.profile_photo_url != null ? user.profile_photo_url : UserPhoto} alt="story" />
                </Link>
                <p>{user.username} </p>
            </div>
        </div>

    )
}

export default Story;