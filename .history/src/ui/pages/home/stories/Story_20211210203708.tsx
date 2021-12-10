import { GetUserType } from "core/store/reducers/usersReducer";
import React, { FC } from "react";
import style from "./Stories.module.scss";

interface StoryProps {
    img: string;
    user: Array<GetUserType>
}

const Story: FC<StoryProps> = ({ img, user }) => {
    return (
        <div>
            <div className={style.item}>
                <h1>User</h1>
                <img width={64} src={img} alt="story" />
            </div>
        </div>

    )
}

export default Story;