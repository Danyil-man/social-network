import React, { FC } from "react";
import style from './EditProfileModal.module.scss'
import headerAva from "public/images/MiniProf/header__ava.png"
import { Field, Form, Formik } from "formik";

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
                </div>
                <Formik
                    initialValues={{
                        description: '',
                        first_name: '',
                        last_name: '',
                        job_title: ''
                    }}
                    onSubmit={submit}
                >
                    <Form className={style.formContainer}>
                        <div className={style.profilePhotoNameSide}>
                            <div className={style.imgBlock}>
                                <img width={148} src={headerAva} alt="" />
                            </div>
                            <div className={style.NamseFields}>
                                <div className={style.formFieldItem}>
                                    <label>First Name</label>
                                    <div className={style.formField}>
                                        <Field type="text" name="first_name" placeholder="Your first name" />
                                    </div>
                                </div>
                                <div className={style.formFieldItem}>
                                    <label>Second Name</label>
                                    <div className={style.formField}>
                                        <Field type="text" name="last_name" placeholder="Your second name" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.descriptionProfileBlock}>
                            <div className={style.formFieldItem}>
                                <label>Job Title</label>
                                <div className={style.formField}>
                                    <Field type="text" name="job_title" placeholder="Your job" />
                                </div>
                            </div>
                            <div className={style.formFieldItem}>
                                <label>Description</label>
                                <div className={style.formField}>
                                    <Field type="text" name="description" placeholder="Describe Yourself" />
                                </div>
                            </div>
                        </div>

                        <div className={style.editFormFooter}>
                            <button onClick={() => closeModal(false)}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default EditProfileModal