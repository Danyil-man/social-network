import { CreatePostType } from "core/store/api/api";
import { Field, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import aws, { S3 } from 'aws-sdk';
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"

interface PropsModal {
    closeModal: (setIsModal: boolean) => void;
    createPosts: (postItem: CreatePostType) => void
    isLoading: boolean
    postItem: CreatePostType
}

const NewPostModal: FC<PropsModal> = ({ closeModal, postItem,
    isLoading, createPosts }) => {
    const [isModal, setIsModal] = useState(true);
    const files = postItem.photos_attributes.map(file => (
        <p>Id: {file.image.id} - {file.image.metadata.size} </p>
    ))
    const submit = (values: any) => {
        createPosts(postItem)
        console.log({ values })
        console.log('PostItem', postItem)
    }
    return (
        <div>
            {isLoading ? <Preloader /> : null}
            {isModal && (
                <div className={style.wrapper}>
                    <div className={style.container}>
                        <div className={style.title}>
                            <h1>Upload a photo</h1>
                        </div>
                        <Formik
                            initialValues={{
                                description: '',
                                photo: postItem.photos_attributes
                            }}
                            onSubmit={submit}
                        >
                            <Form className={style.body}>
                                <div className={style.fileblock}>
                                    <Field type="file" name="photo" />
                                    {files}
                                </div>
                                <div className={style.footer}>
                                    <div className={style.descriptionblock}>
                                        <label>Description</label>
                                        <Field as='textarea'
                                            type="text"
                                            name="description"
                                            placeholder="Description..."
                                        />
                                        <div className={style.modalFooter}>
                                            <button onClick={() => closeModal(false)} className={style.cancelBtn}>
                                                Cancel
                                            </button>
                                            <button className={style.saveBtn} type="submit">
                                                Post
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>

            )}
        </div>
    )
}

export default NewPostModal;