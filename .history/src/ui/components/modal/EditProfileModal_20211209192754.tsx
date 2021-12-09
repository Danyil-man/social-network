import React, { FC } from "react";
import style from './EditProfileModal.module.scss'
import headerAva from "public/images/MiniProf/header__ava.png"
import { Formik } from "formik";

type EditModalType = {
    closeModal: (setIsModalEdit: boolean) => void
}

const EditProfileModal: FC<EditModalType> = ({ closeModal }) => {
    const submit = () => {

    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.modalHeader}>
                    <h4 className={style.headerTitle}>Profile information</h4>
                    <button onClick={() => closeModal(false)}><i className="far fa-times-circle"></i></button>
                </div>
                <Formik
                    initialValues={{

                    }}
                    onSubmit={submit}
                >
                    <div className={style.formContainer}>
                        <div className={style.profilePhotoNameSide}>
                            <div className={style.imgBlock}>
                                <img width={148} src={headerAva} alt="" />
                            </div>
                            <div className={style.photoNamseFields}>

                            </div>

                        </div>
                    </div>
                </Formik>
            </div>
        </div>
    )
}

export default EditProfileModal