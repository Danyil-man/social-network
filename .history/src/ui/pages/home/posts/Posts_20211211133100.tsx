import React, { FC } from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import { GetUserType } from "core/store/reducers/usersReducer";

interface PostsType {
    users: Array<GetUserType>
    getProfileUser: (userId: number) => void
}

const Posts: FC<PostsType> = ({ users, getProfileUser }) => {
    return (
        <div className={style.wrapper}>
            {users.map(user =>
                <Post
                    user={user}
                    getProfileUser={getProfileUser}
                />)}

        </div>
    )
}

export default Posts;