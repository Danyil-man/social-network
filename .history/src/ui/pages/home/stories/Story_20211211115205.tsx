import { GetUserType } from "core/store/reducers/usersReducer";
import React, { FC } from "react";
import style from "./Stories.module.scss";

interface StoryProps {
    user: GetUserType
}

const Story: FC<StoryProps> = ({ user }) => {
    return (
        <div>
            <div className={style.item}>
                <img width={64} src={img} alt="story" />
                <p>UserName{user.username} </p>
            </div>
        </div>

    )
}

export default Story;