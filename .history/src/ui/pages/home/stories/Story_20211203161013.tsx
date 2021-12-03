import React from "react";
import style from "./Stories.module.scss";

interface StoryProps {
    imgItem: string;
}

const Story = (props: StoryProps) => {
    return (
        <div>
            <div className={style.item}>
                <img width={64} src={props.imgItem} alt="story" />
            </div>
        </div>

    )
}

export default Story;