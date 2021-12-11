import React, { FC } from "react";
import style from "./Stories.module.scss";

interface StoryProps {
    img: string;
}

const Story: FC<StoryProps> = ({ img, user }) => {
    return (
        <div>
            <div className={style.item}>
                <img width={64} src={img} alt="story" />
            </div>
        </div>

    )
}

export default Story;