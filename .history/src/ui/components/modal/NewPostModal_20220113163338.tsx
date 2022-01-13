import { CreatePostType, ImagePhotoType, PostsAPI } from "core/store/api/api";
import { Field, FieldArray, Form, Formik, useField } from "formik";
import React, { Component, FC, useEffect, useRef, useState } from "react";
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"
import Dropzone from "react-dropzone-uploader"
import 'react-dropzone-uploader/dist/styles.css'
import dropImg from 'public/images/dropBackground.png';
import Uppy, { UploadedUppyFile } from '@uppy/core';
import AwsS3 from "@uppy/aws-s3";
import { DragDrop } from "@uppy/react";
import { createPosts } from "core/store/reducers/postsReducer";

type PropsModal = {
    closeModal: (setIsModal: boolean) => void;
    createPosts: (postItem: CreatePostType) => void
    isLoading: boolean
    postItem: CreatePostType
}

type Image = {
    createPosts: (postItem: CreatePostType) => void
}

export const LoadImage: FC<Image> = ({ createPosts }) => {
    let obj: CreatePostType
    const [descr, setDescription] = useState('')
    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 2 },
        autoProceed: true,
    })

    uppy.use(AwsS3, { companionUrl: 'https://linkstagram-api.ga' })

    uppy.on('complete', (result) => {
        const data = result.successful

        obj = {
            description: descr,
            photos_attributes: data.map(m => {
                let key = '';

                if (m.meta.key) {
                    key = m.meta.key as string;
                }

                const [storage, id] = key.split("/");

                return {
                    image: {
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
        createPosts(obj)
    })

    return (<>
        <DragDrop
            uppy={uppy}
        />
        <input type='text' name='description' onChange={(e) => setDescription(e.target.value)} />
    </>

    );
};

const NewPostModal: FC<PropsModal> = ({ closeModal, postItem,
    isLoading, createPosts }) => {
    const [isModal, setIsModal] = useState(true);
    const submit = () => {
        //createPosts()
        console.log()
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
                                photos_attributes: postItem.photos_attributes
                            }}
                            onSubmit={submit}
                        >
                            <Form className={style.body}>
                                <LoadImage createPosts={createPosts} />

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

// export interface SingleFileUploadWithProgressProps {
//     file: File;
//     onUpload: (file: File) => void;
// }

// export function SingleFileUploadWithProgress({
//     file,
//     onUpload,
// }: SingleFileUploadWithProgressProps) {

//     useEffect(() => {
//         async function upload() {
//             onUpload(file);
//         }

//         upload();
//     }, []);

// }

// function uploadFile(file: File) {
//     return new Promise<string>((res, rej) => {
//         const formData = new FormData();
//         formData.append('file', file);
//     });
// }

export default NewPostModal;

