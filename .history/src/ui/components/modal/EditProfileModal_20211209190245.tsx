import React, { FC } from "react";
import style from './EditProfileModal.module.scss'
import headerAva from "public/images/MiniProf/avatar.png"

type EditModalType = {
    closeModal: (setIsModalEdit: boolean) => void
}

const EditProfileModal: FC<EditModalType> = ({ closeModal }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.modalHeader}>
                    <h4 className={style.headerTitle}>Profile information</h4>
                    <button onClick={() => closeModal(false)}><i className="far fa-times-circle"></i></button>
                </div>
                <div className={style.formContainer}>
                    <div className={style.profilePhotoNameSide}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileModal