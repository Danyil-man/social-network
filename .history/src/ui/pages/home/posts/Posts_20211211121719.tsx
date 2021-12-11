import React from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
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