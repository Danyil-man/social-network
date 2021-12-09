import React, { FC } from "react";
import style from './EditProfileModal.module.scss'

type EditModalType = {
    closeModal: (setIsModalEdit: boolean) => void
}

const EditProfileModa: FC<EditModalType> = () => {
    return (
        <div className={style.wrapper}>

        </div>
    )
}

export default EditProfileModal