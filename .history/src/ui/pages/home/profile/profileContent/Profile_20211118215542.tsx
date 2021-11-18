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
                        <div className={profile.photoBlock}>
                            <img width={115} src={props.photo} alt="profile__photo" />
                        </div>
                        <div className={profile.description}>
                            <h4>{props.name}</h4>
                            <p>Photographer</p>{/* will be props  */}
                        </div>
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