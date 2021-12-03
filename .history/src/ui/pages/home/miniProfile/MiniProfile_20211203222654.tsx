import React, { useState } from "react";
import style from "./MiniProfile.module.scss";
import avatar from "public/images/MiniProf/avatar.png";
import { useTranslation } from "react-i18next";
//import { useAuth } from "core/hooks/useAuth";
import Modal from "ui/components/modal/Modal";

const MiniProfile = () => {
    const { t } = useTranslation();
    const [isModal, setIsModal] = useState(false)
    // const { email } = useAuth();
    //const toggleModal = () => setIsModal(wasModal => !wasModal)
    return (
        <div className={style.wrapper}>
            <div className={style.media}>
                <div className={style.followers}>
                    <b>1,1K</b>
                    <p>Followers</p>
                </div>

                <button className={style.avabtn}>
                    <img width={88} src={avatar} alt="avatar" />
                </button>

                <div className={style.following}>
                    <b>448</b>
                    <p>Following</p>
                </div>
            </div>

            <div className={style.description}>
                <h6> Props Name <span>-</span> Photographer</h6>
                <p>Like to travel and shoot cinematic and b/w photos <br /> Tools - Capture One for Raw  </p>

            </div>

            <div className={style.navigation}>
                <button className={style.editProf}>{t('editProf')}</button>
                <button onClick={() => setIsModal(true)} className={style.NewPost}>{t('newPost')}</button>
            </div>

            <div className={style.privacy}>
                <p>About Help Terms Locations Language <br /> <i className="far fa-copyright"> 2021 Linkstagram</i>  </p>
            </div>

            {isModal && <Modal
                closeModal={setIsModal}
            />}


        </div>
    )
}

export default MiniProfile;