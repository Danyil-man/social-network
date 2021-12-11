import React, { FC } from "react";
import style from "./Stories.module.scss";
import Story from "./Story";
import { GetUserType } from "core/store/reducers/usersReducer";

type Storiestype = {
    users: Array<GetUserType>
    getUsers: () => void
    getProfileUser: (userId: number) => void
}

const Stories: FC<Storiestype> = ({ users, getUsers, getProfileUser }) => {
    return (
        <>
            <div className={style.wrapper}>
                {users.map(user => <Story user={user} />)}
            </div>
        </>
    )
}

export default Stories;