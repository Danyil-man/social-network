import React from "react";
import stories from "./Stories.module.scss";
import Story from "./Story";
import item1 from "../../../../public/images/story/story1.png";
import item2 from "../../../../public/images/story/story2.png";
import item3 from "../../../../public/images/story/story3.png";
import item4 from "../../../../public/images/story/story4.png";
import item5 from "../../../../public/images/story/story5.png";
import item6 from "../../../../public/images/story/story6.png";


let storiesArr = [
    {
        img: item1
    },
    {
        img: item2
    },
    {
        img: item3
    },
    {
        img: item4
    },
    {
        img: item5
    },
    {
        img: item2
    },
    {
        img: item6
    },
    {
        img: item3
    },
]

const Stories = () => {
    return (
        <div className={stories.wrapper}>
            {storiesArr.map(story => <Story img={story.img} />)}
        </div>
    )
}

export default Stories;