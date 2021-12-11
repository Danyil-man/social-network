import React from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import item1 from "public/images/story/story1.png";
import item2 from "public/images/story/story2.png";
//import item3 from "public/images/story/story3.png";
import post1 from "public/images/posts/post1.jpg";
import nav from "public/images/posts/navPost.png";
import { GetUserType } from "core/store/reducers/usersReducer";

interface PostsProps {
    users: Array<GetUserType>

}

const Posts = (props: PostsProps) => {
    return (
        <div className={style.wrapper}>
            {Post_data.map(post =>
                <Post
                    post={post}

                />)}

        </div>
    )
}

export default Posts;