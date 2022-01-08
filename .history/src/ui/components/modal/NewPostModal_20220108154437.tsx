import { CreatePostType, ImagePhotoType, PostsAPI } from "core/store/api/api";
import { Field, Form, Formik } from "formik";
import React, { Component, FC, useEffect, useState } from "react";
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'
import dropImg from 'public/images/dropBackground.png';
import Uppy from '@uppy/core';
import AwsS3 from "@uppy/aws-s3";
import { DragDrop } from "@uppy/react";



type PropsModal = {
    closeModal: (setIsModal: boolean) => void;
    createPosts: (postItem: CreatePostType) => void
    isLoading: boolean
    postItem: CreatePostType
}

const NewPostModal: FC<PropsModal> = ({ closeModal, postItem,
    isLoading, createPosts }) => {
    const [isModal, setIsModal] = useState(true);
    const [fileState, setFileState] = useState(null)

    // const handleChange = ({ file }: any) => {
    //     setFileState(file)
    //     console.log(file)
    // }


    const UploadPhoto = () => {
        const uppy = new Uppy({
            meta: { type: 'photos' },
            restrictions: { maxNumberOfFiles: 2 },
            autoProceed: true
        })

        uppy.use(AwsS3, { companionUrl: 'https://linkstagram-api.ga' })
        uppy.on('complete', (result) => {
            const data = result.successful

            const obj: Array<ImagePhotoType> = data.map(item => {

                let key = '';

                if (item.meta.key) {
                    key = item.meta.key as string;
                }
                console.log('key', key)
                const [storage, id] = key.split('/')

                return {

                    image: {
                        id,
                        storage,
                        metadata: {
                            filename: item.name,
                            size: item.size,
                            mime_type: item.meta.type || ''
                        }
                    }

                }

            })

            console.log('data:', data, 'Photo', obj)
            //createPosts(obj)
        })
        return (
            <>
                <DragDrop uppy={uppy} />
            </>


        )
    }

    const submit = (values: any) => {
        //handleSubmit()
        //uploadPhoto(values.photo)
        createPosts(values)
        console.log({ values })
    }
    return (
        <div>
            {isLoading ? <Preloader /> : null}
            {isModal && (
                <div className={style.wrapper}>
                    <div className={style.container}>
                        <Formik
                            initialValues={{
                                description: postItem.description,
                                photo: fileState
                            }}
                            onSubmit={submit}
                        >

                            <Form className={style.body}>
                                {/* <UploadPhoto /> */}
                                <UploadPhoto />
                                <div className={style.descriptionBlock}>
                                    <label>Description</label>
                                    <Field as='textarea'
                                        type="text"
                                        name="description"
                                        placeholder="Description..."
                                    />
                                </div>
                                <div className={style.modalFooter}>
                                    <button onClick={() => closeModal(false)} className={style.cancelBtn}>
                                        Cancel
                                    </button>
                                    <button className={style.saveBtn} type="submit">
                                        Post
                                    </button>
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

