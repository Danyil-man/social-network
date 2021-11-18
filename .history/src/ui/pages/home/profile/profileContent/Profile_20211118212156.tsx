import React from "react";
import profile from "./Profile.module.scss";

interface ProfileProps {
    photo: string;
    name: string;

}

const Profile = () => {
    return (
        <div className={profile.wrapper}>
            <div className={profile.content}>
                <div className={profile.mainHeader}>

                </div>
            </div>
        </div>
    )
}

export default Profile;