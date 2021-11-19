import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import profile from "./Profile.module.scss";
import pic1 from "../../../../../public/images/profile_photos/photo1.png";
import pic2 from "../../../../../public/images/profile_photos/photo2.png";
import pic3 from "../../../../../public/images/profile_photos/photo3.png";
import pic4 from "../../../../../public/images/profile_photos/photo4.png";
import pic5 from "../../../../../public/images/profile_photos/photo5.png";
import pic6 from "../../../../../public/images/profile_photos/photo6.png";

interface ProfileProps {
    photo: string;
    name: any;
}

let photos = [
    pic1, pic2, pic3, pic4, pic5, pic6
]


const Profile = (props: ProfileProps) => {
    const { t } = useTranslation();
    const [isModal, setIsModal] = useState(false)
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
                            <div className={profile.followersBlock}>
                                <b>1,1K</b>
                                <p>Followers</p>
                            </div>
                            <div className={profile.followingBlock}>
                                <b>448</b>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className={profile.navigation}>
                            <button className={profile.editProf}>{t('editProf')}</button>
                            <button onClick={() => setIsModal(true)} className={profile.NewPost}>{t('newPost')}</button>
                        </div>
                    </div>
                </div>
                <div className={profile.photosBlockContent}>

                </div>
            </div>
        </div>
    )
}

export default Profile;