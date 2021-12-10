import React, { FC, useState } from "react";
import style from "./MiniProfile.module.scss";
import avatar from "public/images/MiniProf/avatar.png";
import { useTranslation } from "react-i18next";
//import { useAuth } from "core/hooks/useAuth";
import NewPostModal from "ui/components/modal/NewPostModal";
import { AccountType, GetAccountType } from "core/store/api/api";
import EditProfileModal from "ui/components/modal/EditProfileModal";

type MiniProfileType = {
    profile?: GetAccountType
    isLoading: boolean
    editProfile: (account: AccountType) => void
}

const MiniProfile: FC<MiniProfileType> = ({ profile, isLoading, editProfile }) => {
    const { t } = useTranslation();
    const [isNewPostModal, SetisNewPostModal] = useState(false)
    const [isModalEdit, setIsModalEdit] = useState(false)
    return (
        <div className={style.wrapper}>
            <div className={style.media}>
                <div className={style.followers}>
                    <b>{profile?.followers}</b>
                    <p>Followers</p>
                </div>

                <button className={style.avabtn}>
                    <img width={88} src={avatar} alt="avatar" />
                </button>

                <div className={style.following}>
                    <b>{profile?.following}</b>
                    <p>Following</p>
                </div>
            </div>

            <div className={style.description}>
                <h6> {profile?.username} <span>-</span> {profile?.job_title} </h6>
                <p> {profile?.description}</p>

            </div>

            <div className={style.navigation}>
                <button onClick={() => SetisNewPostModal(true)} className={style.editProf}>{t('editProf')}</button>
                <button onClick={() => SetisNewPostModal(true)} className={style.NewPost}>{t('newPost')}</button>
            </div>

            <div className={style.privacy}>
                <p>About Help Terms Locations Language <br /> <i className="far fa-copyright"> 2021 Linkstagram</i>  </p>
            </div>

            {isNewPostModal && <NewPostModal
                closeModal={setIsModal}
                isLoading={isLoading}
            />}

            {isModalEdit && <EditProfileModal
                closeModal={setIsModalEdit}
                editProfile={editProfile}
                profile={profile}
                isLoading={isLoading}
            />}


        </div>
    )
}

export default MiniProfile;