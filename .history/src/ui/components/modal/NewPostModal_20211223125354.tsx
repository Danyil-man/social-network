import { CreatePostType } from "core/store/api/api";
import { Field, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'

interface PropsModal {
    closeModal: (setIsModal: boolean) => void;
    createPosts: (postItem: CreatePostType) => void
    isLoading: boolean
    postItem: CreatePostType
}

const NewPostModal: FC<PropsModal> = ({ closeModal, postItem,
    isLoading, createPosts }) => {
    const [isModal, setIsModal] = useState(true);
    const submit = (values: any) => {
        createPosts(values)
        console.log({ values })
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
                                description: postItem.description,
                                photo: postItem.photos_attributes
                            }}
                            onSubmit={submit}
                        >
                            <Form className={style.body}>
                                <div className={style.fileblock}>
                                    <Dropzone
                                        styles={{
                                            dropzone: { width: 480, height: 345 },
                                            dropzoneActive: { borderColor: 'blue' }
                                        }}
                                    />
                                    {/* <Field type="file" name="photo" /> */}
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