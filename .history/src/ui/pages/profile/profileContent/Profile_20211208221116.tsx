import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Profile.module.scss";
import pic1 from "public/images/profile_photos/photo1.png";
import pic2 from "public/images/profile_photos/photo2.png";
import pic3 from "public/images/profile_photos/photo3.png";
import pic4 from "public/images/profile_photos/photo4.png";
import pic5 from "public/images/profile_photos/photo5.png";
import pic6 from "public/images/profile_photos/photo6.png";
import { GetAccountType } from "core/store/api/api";

interface ProfileType {
    photo: string;
    profile?: GetAccountType
}

let photos = [
    {
        img: pic1
    },
    {
        img: pic2
    },
    {
        img: pic3
    },
    {
        img: pic4
    },
    {
        img: pic5
    },
    {
        img: pic6
    },
]


const Profile: FC<ProfileType> = ({ profile, photo }) => {
    const { t } = useTranslation();
    const [isModal, setIsModal] = useState(false)
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.mainHeader}>
                    <div className={style.leftSide}>
                        <div className={style.photoBlock}>
                            <img width={115} src={photo} alt="profile__photo" />
                        </div>
                        <div className={style.description}>
                            <div className={style.headerDescription}>
                                <h4>{profile?.username}</h4>
                                <p>Photographer</p>{/* will be props  */}
                            </div>
                            <div className={style.lifeDescription}>
                                <p> Quasi facere reiciendis rerum tempore ea magni dignissimos quia, quo neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt amet quos ipsum, eum incidunt.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightSide}>
                        <div className={style.mediasubscriptions}>
                            <div className={style.followersBlock}>
                                <b>{profile?.followers}</b>
                                <p>Followers</p>
                            </div>
                            <div className={style.followingBlock}>
                                <b>{profile?.following}</b>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className={style.navigation}>
                            <button className={style.editProf}>{t('editProf')}</button>
                            <button onClick={() => setIsModal(true)} className={style.NewPost}>{t('newPost')}</button>
                        </div>
                    </div>
                </div>
                <div className={style.photosCollageContent}>
                    {photos.map(photo => <div className={style.photoItem}>
                        <img width={358} height={358} src={photo.img} alt="" />
                    </div>

                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile;