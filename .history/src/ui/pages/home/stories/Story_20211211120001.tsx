import { GetUserType } from "core/store/reducers/usersReducer";
import React, { FC } from "react";
import style from "./Stories.module.scss";
import UserPhoto from 'public/images/withoutphoto.png'

interface StoryProps {
    user: GetUserType
}

const Story: FC<StoryProps> = ({ user }) => {
    return (
        <div>
            <div className={style.item}>
                <img width={64} src={user.profile_photo_url != null ? user.profile_photo_url : UserPhoto} alt="story" />
                <p>UserName{user.username} </p>
            </div>
        </div>

    )
}

export default Story;