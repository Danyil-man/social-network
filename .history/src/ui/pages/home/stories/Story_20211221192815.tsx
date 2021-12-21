import { GetUserType } from "core/store/reducers/usersReducer";
import React, { FC } from "react";
import style from "./Stories.module.scss";
import UserPhoto from 'public/images/withoutphoto.png'
import { Link } from "react-router-dom";

interface StoryProps {
    user: GetUserType
    getProfileUser: (username: string) => void
    getPostsOfSingleUser: (username: string) => void
}


const Story: FC<StoryProps> = ({ user, getProfileUser, getPostsOfSingleUser }) => {
    return (
        <div>
            <div className={style.item}>
                <Link to={`/user/${username}`}>
                </Link>
                <img width={64} src={user.profile_photo_url != null ? user.profile_photo_url : UserPhoto} alt="story" />
                <p>{user.username} </p>
            </div>
        </div>

    )
}

export default Story;