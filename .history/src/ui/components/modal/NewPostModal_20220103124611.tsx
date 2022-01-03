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
import { AwsS3 } from "uppy";


interface PropsModal {
    closeModal: (setIsModal: boolean) => void;
    createPosts: (postItem: CreatePostType) => void
    isLoading: boolean
    postItem: CreatePostType
}

const NewPostModal: FC<PropsModal> = ({ closeModal, postItem,
    isLoading, createPosts }) => {
    const [isModal, setIsModal] = useState(true);
    const [fileState, setFileState] = useState(postItem.photos_attributes)
    const handleChange = ({ file }: any) => {
        setFileState(file)
    }
    const AWS = require('aws-sdk')
    const s3 = new AWS.S3()
    const handleSubmit = async () => {

        //let uppy = new Uppy()

        // uppy.use(Uppy.Dashboard, {
        //     inline: true,
        //     //target: '#'
        // }).use(Uppy.Tus, { endpoint: 'https://linkstagram-api.ga/posts' })

        //uppy.use(Tus, { endpoint: 'https://linkstagram-api.ga/posts' })

        // uppy.on('complete', (result) => {
        //     const url = result.successful[0].uploadURL
        //     console.log('url', url)
        //     console.log('Upload complete! We have uploaded these files:', result.successful)
        // })

        // console.log(fileState)
        // //get
        // const response = await PostsAPI.getParams()
        // console.log('response:', response)
        // const result = await fetch(response.data, {
        //     method: 'POST',
        //     headers: { "Content-Type": "image/jpeg" },
        //     //body: fileState
        // })
        // console.log('result', result, 'response:', response)
        exports.handler = async (event: any) => {
            return await getUploadURL(event)
        }
        const getUploadURL = async function (event: any) {
            const randomID = parseInt(Math.random() * 10000000)
            const Key = `${randomID}.jpg`

            // Get signed URL from S3
            const s3Params = {
                Bucket: process.env.UploadBucket,
                Key,
                ContentType: 'image/jpeg'
            }
            const uploadURL = await s3.get('putObject', s3Params)
            return JSON.stringify({
                uploadURL: uploadURL,
                Key
            })

        }
        let blobData = new Blob([new Uint8Array(Array)], { type: 'image/jpeg' })
        const result = await fetch('', {
            method: 'POST',
            body: blobData
        })

    }

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

function ms(arg0: string): number | undefined {
    throw new Error("Function not implemented.");
}
