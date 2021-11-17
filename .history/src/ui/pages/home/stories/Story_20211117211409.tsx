import React from "react";
import stories from "./Stories.module.scss";

interface StoryProps {
    img: string;
}

const Story = (props: StoryProps) => {
    return (
        <div>
            <div className={stories.item}>
                <img src={props.img} alt="story" />
            </div>
        </div>

    )
}

export default Story;