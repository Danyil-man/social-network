import { CreatePostType, ImagePhotoType } from "core/store/api/api";
import { Field, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'
import dropImg from 'public/images/dropBackground.png';
import axios from "axios";

interface PropsModal {
    closeModal: (setIsModal: boolean) => void;
    createPosts: (postItem: CreatePostType) => void
    isLoading: boolean
    postItem: CreatePostType
}

const NewPostModal: FC<PropsModal> = ({ closeModal, postItem,
    isLoading, createPosts }) => {
    const [isModal, setIsModal] = useState(true);
    const handleChange = ({ meta }: any, status: any) => {
        console.log({ meta }, status)
    }
    let files = postItem.photos_attributes
    const handleSubmit = async (files: Array<ImagePhotoType>) => {

        const file = files[0]
        console.log(file)
        //get
        const response = await axios({
            method: 'GET',
            url: '/s3/params'
        })
        console.log('response:', response)
        //post
        const result = await fetch(response.data, {
            method: 'POST',
            headers: { "Content-Type": "image/jpeg" },
            //body: file
        })
        console.log('result', result)
    }
    const submit = (values: any) => {
        createPosts(values)
        handleSubmit(files)
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
                                        onChangeStatus={handleChange}
                                        //onSubmit={handleSubmit}
                                        inputContent='Choose any photo from your library'
                                        maxFiles={2}
                                        styles={{
                                            dropzone: {
                                                width: 480, height: 345,
                                                backgroundImage: dropImg, backgroundColor: 'lightgrey',
                                                color: 'white'
                                            },
                                            dropzoneActive: { borderColor: 'blue' },

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