import React, { useState } from "react";
import mProf from "./MiniProfile.module.scss";
import avatar from "../../../../public/images/MiniProf/avatar.png";
import { useTranslation } from "react-i18next";
import Modal from "../../../components/common/modal/Modal";

const MiniProfile = () =>{
    const {t} = useTranslation();
    const [isModal, setIsModal] = useState(false)
    //const toggleModal = () => setIsModal(wasModal => !wasModal)
    return(
        <div className={mProf.wrapper}>
            <div className={mProf.media}>
                <div className={mProf.followers}>
                    <b>1,1K</b>
                    <p>Followers</p>
                </div>

                <button className={mProf.avabtn}>
                    <img width={88} src={avatar} alt="avatar" />
                </button>

                <div className={mProf.following}>
                    <b>448</b>
                    <p>Following</p>
                </div>
            </div>

            <div className={mProf.description}>
                <h6>Alexander Sokolov <span>-</span> Photographer</h6>
                <p>Like to travel and shoot cinematic and b/w photos <br /> Tools - Capture One for Raw  </p>

            </div>

            <div className={mProf.navigation}>
                <button className={mProf.editProf}>{t('editProf')}</button>
                <button onClick={() => setIsModal(true)} className={mProf.NewPost}>{t('newPost')}</button>
            </div>

            <div className={mProf.privacy}>
            <p>About Help Terms Locations Language <br /> <i className="far fa-copyright"> 2021 Linkstagram</i>  </p>
            </div>

            {isModal && <Modal 
            closeModal={() => setIsModal}
            />}


        </div>
    )
}

export default MiniProfile;