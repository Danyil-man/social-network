import React, { FC } from "react";
import style from "./Stories.module.scss";
import Story from "./Story";
import { GetUserType } from "core/store/reducers/usersReducer";
import { GetSinglePostType } from "core/store/api/api";


type Storiestype = {
    users: Array<GetUserType>
    singlePosts: Array<GetSinglePostType>
    getProfileUser: (username: string) => void
    getPostsOfSingleUser: (username: string) => void
}

const Stories: FC<Storiestype> = ({ users, singlePosts, getProfileUser, getPostsOfSingleUser }) => {
    return (
        <>
            <div className={style.wrapper}>
                {users.map(user => <Story
                    user={user}
                    singlePosts={singlePosts}
                    getProfileUser={getProfileUser}
                    getPostsOfSingleUser={getPostsOfSingleUser}
                />)}
            </div>
        </>
    )
}

export default Stories;