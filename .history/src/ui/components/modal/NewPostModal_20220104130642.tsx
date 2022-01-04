import { CreatePostType, ImagePhotoType, PostsAPI } from "core/store/api/api";
import { Field, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'
import dropImg from 'public/images/dropBackground.png';
import axios from "axios";
import Uppy from "@uppy/core";
import Tus from '@uppy/tus'
import { S3 } from 'aws-sdk'
import { Dashboard, XHRUpload } from "uppy";


interface PropsModal {
    closeModal: (setIsModal: boolean) => void;
    createPosts: (postItem: CreatePostType) => void
    isLoading: boolean
    postItem: CreatePostType
}

const NewPostModal: FC<PropsModal> = ({ closeModal, postItem,
    isLoading, createPosts }) => {
    const [isModal, setIsModal] = useState(true);
    const [fileState, setFileState] = useState(null)
    const handleChange = ({ file }: any) => {
        setFileState(file)
    }
    const handleSubmit = async () => {

        let uppy = new Uppy()

        uppy.use(Dashboard, {
            inline: true,
            target: '#drag-drop-area'
        })

        uppy.use(XHRUpload, {
            endpoint: 'https://linkstagram-api.ga/posts',
            formData: true
        })

        uppy.on('complete', (result) => {
            const url = result.successful[0].uploadURL
            //console.log('url', url)
            //console.log('Upload complete! We have uploaded these files:', result.successful)
        })

        console.log(fileState)
        //get
        const response = await PostsAPI.getParams()
        console.log('response:', response)
        const result = await fetch(response.data, {
            method: 'POST',
            headers: { "Content-Type": "image/jpeg" },
            //body: fileState
        })
        //console.log('result', result, 'response:', response)
    };


    const submit = (values: any) => {
        handleSubmit()
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
                                photos_attributes: fileState
                            }}
                            onSubmit={submit}
                        >
                            <Form className={style.body}>
                                <div id="drag-drop-area" className={style.dropzoneBox}>
                                    <Dropzone
                                        onChangeStatus={handleChange}
                                        //onSubmit={handleSubmit}
                                        inputContent='Choose any photo from your library'
                                        maxFiles={2}
                                        styles={{
                                            dropzone: {
                                                width: 480, height: 345,
                                                margin: 0,
                                                padding: 0,
                                                backgroundImage: dropImg, backgroundColor: 'lightgrey',
                                                color: 'white'
                                            },
                                            dropzoneActive: { borderColor: 'blue' },


                                        }}
                                    />
                                </div>
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

