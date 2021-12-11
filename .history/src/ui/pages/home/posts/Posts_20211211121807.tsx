import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetUserType } from "core/store/reducers/usersReducer";

interface PostsType {
    users: Array<GetUserType>

}

const Posts: FC<PostsType> = ({ users }) => {
    return (
        <div className={style.wrapper}>
            {users.map(user =>
                <Post
                    user={user}
                />)}

        </div>
    )
}

export default Posts;