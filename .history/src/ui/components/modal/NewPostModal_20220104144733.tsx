import { CreatePostType, ImagePhotoType, PostsAPI } from "core/store/api/api";
import { Field, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'
import dropImg from 'public/images/dropBackground.png';
import axios from "axios";
//import Uppy from "@uppy/core";
import Tus from '@uppy/tus'
import { S3 } from 'aws-sdk'
import Dashboard from "@uppy/dashboard"
import XHRUpload from "@uppy/xhr-upload"
import AwsS3 from "@uppy/aws-s3";

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

    const handleChange = ({ file }: any) => {
        setFileState(file)
    }

    // let uppy = new Uppy()
    //     .use(XHRUpload, {
    //         endpoint: 'https://linkstagram-api.ga/posts',
    //         formData: true
    //     })

    //     .on('complete', (result) => {
    //         const url = result.successful[0].uploadURL
    //         //console.log('url', url)
    //         //console.log('Upload complete! We have uploaded these files:', result.successful)
    //     })


    const handleSubmit = async () => {
        let uppy = new Uppy()
        uppy.use(AwsS3, {
            getUploadParameters(file) {
                // Send a request to our PHP signing endpoint.
                return fetch('/s3-sign.php', {
                    method: 'post',
                    // Send and receive JSON.
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        filename: file.name,
                        contentType: file.type,
                    }),
                }).then((response) => {
                    // Parse the JSON response.
                    return response.json()
                }).then((data) => {
                    // Return an object in the correct shape.
                    return {
                        method: data.method,
                        url: data.url,
                        fields: data.fields,
                        // Provide content type header required by S3
                        headers: {
                            'Content-Type': file.type,
                        },
                    }
                })
            },
        })

        console.log("FILE:", fileState)
        //get
        const response = await PostsAPI.getParams()
        console.log('response:', response)
        const result = (response.data, {
            method: 'POST',
            headers: { "Content-Type": "image/jpeg" },
            //body: fileState
        })
        console.log('result', result)
        console.log('result', result, 'response:', response)
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
                                <div className={style.dropzoneBox}>
                                    <Dropzone

                                        onChangeStatus={handleChange}
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

