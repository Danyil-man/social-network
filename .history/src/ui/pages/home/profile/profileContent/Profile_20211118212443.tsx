import React from "react";
import profile from "./Profile.module.scss";

interface ProfileProps {
    photo: string;
    name: any;
}

const Profile = (props: ProfileProps) => {
    return (
        <div className={profile.wrapper}>
            <div className={profile.content}>
                <div className={profile.mainHeader}>
                    <img width={115} src={props.photo} alt="" />
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;