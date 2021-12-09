import React, { FC } from "react";
import style from './EditProfileModal.module.scss'

type EditModalType = {
    closeModal: (setIsModalEdit: boolean) => void
}

const EditProfileModal: FC<EditModalType> = ({ closeModal }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.modalHeader}>

                </div>
            </div>
        </div>
    )
}

export default EditProfileModal