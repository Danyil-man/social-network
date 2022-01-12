import React, { FC, useCallback, useEffect, useState } from "react";
import style from './EditProfileModal.module.scss'
import UserPhoto from '../../../public/images/withoutphoto.png';
import { Field, Form, Formik } from "formik";
import { AccountType, GetAccountType } from "core/store/api/api";
import Preloader from "../common/Preloader";
import { GetUserType } from "core/store/reducers/usersReducer";
import ProfilePhoto2 from 'public/images/profile_photos/5777995.png'
import AwsS3 from "@uppy/aws-s3";
import { Uppy } from "@uppy/core";
import { editProfile } from "core/store/reducers/profileReducer";
import { DragDrop } from "@uppy/react";
type EditModalType = {
    closeModal: (setIsModalEdit: boolean) => void
    editProfile: (account: AccountType) => void
    profile: GetAccountType
    isLoading: boolean
}

type Image = {
    editProfile: (account: AccountType) => void
    profile: GetAccountType
}
export const LoadImage: FC<Image> = ({ editProfile, profile }) => {

    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 2 },
        autoProceed: true,
    })

    uppy.use(AwsS3, { companionUrl: 'https://linkstagram-api.ga' })

    uppy.on('complete', (result) => {
        const data = result.successful

        let obj: AccountType = {
            username: profile.username,
            description: profile.description,
            first_name: profile.first_name,
            last_name: profile.last_name,
            job_title: profile.job_title,
            profile_photo: data.map(m => {
                let key = '';

                if (m.meta.key) {
                    key = m.meta.key as string;
                }

                const [storage, id] = key.split("/");

                return {
                    profile_photo: {
                        id,
                        storage,
                        metadata: {
                            filename: m.name,
                            size: m.size,
                            mime_type: m.meta.type || ''
                        }
                    }
                }
            })
        }
        console.log('OBJ', obj)
        editProfile(obj)
    })

    return (
        <DragDrop
            uppy={uppy}
        />
    );
};

const EditProfileModal: FC<EditModalType> = ({ closeModal, editProfile, profile, isLoading }) => {
    const [edit, setEdit] = useState(false)
    const submit = ((values: any) => {
        editProfile(values)
        console.log({ values })
    })

    return (
        <div className={style.wrapper}>
            {isLoading ? <Preloader /> : null}
            <div className={style.container}>
                <div className={style.modalHeader}>
                    <h4 className={style.headerTitle}>Profile information</h4>
                </div>
                <Formik
                    initialValues={{
                        description: profile.description,
                        first_name: profile.first_name,
                        last_name: profile.last_name,
                        job_title: profile.job_title
                    }}
                    onSubmit={submit}
                >
                    <Form className={style.formContainer}>
                        <div className={style.profilePhotoNameSide}>
                            <div className={style.imgBlock}>
                                <img width={148} src={profile.profile_photo_url !== null ? profile.profile_photo_url : ProfilePhoto2} alt="" />
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
                            <button className={style.cancelBtn} onClick={() => closeModal(false)}>Cancel</button>
                            <button className={style.saveBtn} type="submit" >Save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            {edit && (<div>
                <LoadImage editProfile={editProfile} profile={profile} />
            </div>)}
        </div>
    )
}

export default EditProfileModal