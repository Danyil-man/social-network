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
    closeModal: (setIsModal: boolean) => void
}

export const LoadImage: FC<Image> = ({ createPosts, closeModal }) => {
    let obj: CreatePostType
    function Submit() {
        createPosts(obj)
        console.log(obj)
    }
    const [descriptions, setDescription] = useState('')
    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 2 },
        autoProceed: true,
    })

    uppy.use(AwsS3, { companionUrl: 'https://linkstagram-api.ga' })

    uppy.on('complete', (result) => {
        const data = result.successful

        obj = {
            description: descriptions,
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

    })


    return (<>
        <DragDrop
            width="100%"
            height="400px"
            uppy={uppy}
        />
        <form onSubmit={Submit} className={style.body}>
            <div className={style.descriptionBlock}>
                <label>Description</label>
                <input
                    placeholder="Description..."
                    onChange={(e) => setDescription(e.target.value)}
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
        </form>
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
                        <LoadImage
                            createPosts={createPosts}
                            closeModal={closeModal}
                        />
                    </div>
                </div>

            )}
        </div>
    )
}

export default NewPostModal;

