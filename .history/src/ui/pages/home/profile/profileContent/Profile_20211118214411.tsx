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
                    <div className={profile.leftSide}>
                        <img width={115} src={props.photo} alt="profile__photo" />
                        <p>{props.name}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda, expedita doloribus distinctio ex cupiditate?</p>
                    </div>
                    <div className={profile.rightSide}>
                        Followers/Statistics
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;