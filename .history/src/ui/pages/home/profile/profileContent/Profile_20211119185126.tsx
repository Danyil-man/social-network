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
                            <div className={profile.headerDescription}>
                                <h4>{props.name}</h4>
                                <p>Photographer</p>{/* will be props  */}
                            </div>
                            <div className={profile.lifeDescription}>
                                <p>Quasi facere reiciendis rerum tempore ea magni dignissimos quia, quo neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt amet quos ipsum, eum incidunt.</p>
                            </div>
                        </div>
                    </div>
                    <div className={profile.rightSide}>
                        <div className={profile.mediasubscriptions}>
                            <div>
                                <b>1,1K</b>
                                <p>Followers</p>
                            </div>
                            <div>
                                <b>439</b>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;