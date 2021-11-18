import React from "react";
import profile from "./Profile.module.scss";

interface ProfileProps {
    photo: string;
    name: string;
}

const Profile = (props: ProfileProps) => {
    return (
        <div className={profile.wrapper}>
            <div className={profile.content}>
                <div className={profile.mainHeader}>
                    <img width={116} src={props.photo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Profile;