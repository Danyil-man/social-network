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



// let file = new File([''], 'filename');
let files: File[] = [];
export const GetUppy = () => {
    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: {
            maxNumberOfFiles: 2,
            allowedFileTypes: ["image/png", "image/jpg", "image/jpeg"],
        },
        autoProceed: false,
    })
    uppy.use(AwsS3, {
        companionUrl: 'https://linkstagram-api.ga',
    });
    console.log('uppy', uppy)
    return <DragDrop uppy={uppy} />;
}

const addFile = (uppy: Uppy, file: File) => {
    return uppy.addFile({
        name: file.name,
        type: file.type,
        data: file,
        source: 'Local'
    })
}

const uploadFiles = async (files: File[]) => {
    //const uppy = getUppy();
    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: {
            maxNumberOfFiles: 2,
            allowedFileTypes: ["image/png", "image/jpg", "image/jpeg"],
        },
        autoProceed: true,
    })
    files.forEach(file => addFile(uppy, file));

    const result = await uppy.upload();
    if (result.failed.length) {
        return result.failed;
    }
    if (result.successful.length) {
        return transformFileData(result.successful);
    }
    console.log('resUp', result)
    return [];
}

export const transformFileData = (files: UploadedUppyFile<any, any>[]): ImagePhotoType[] => {
    return files.map(file => {
        const key: string = (file.meta as any).key;
        const [storage, id] = key.split("/");
        const params: ImagePhotoType = {
            image: {
                id,
                storage,
                metadata: {
                    filename: file.meta.name,
                    size: file.data.size,
                    mime_type: file.data.type
                }
            }
        }
        return params;
    });
}

// export interface UploadableFile {
//     file: File;
// }

// export const CreateUppy = () => {
//     const uppy = new Uppy({
//         meta: { type: "avatar" },
//         restrictions: {
//             maxNumberOfFiles: 2,
//             allowedFileTypes: ["image/*"],
//         },
//         autoProceed: true,
//     });

//     uppy.use(AwsS3, {
//         //resume: true,
//         //retryDelays: [0, 1000, 3000, 5000],
//         //endpoint: "https://linkstagram-api.ga/",
//         companionUrl: "https://linkstagram-api.ga/",
//     });
//     return (
//         <>
//             <DragDrop uppy={uppy} />
//         </>
//     )
// }

// export function uploadFiles(uppy: any, files: any, onReady: (data: PhotosAttribute[]) => void) {

//     files.forEach((file: any) => {
//         const { name, type } = file;
//         uppy.addFile({
//             name,
//             type,
//             data: file,
//             source: "cache",
//         });
//     });

//     uppy.upload().then((x: any) => {
//         let data: any = x.successful;
//         let result = data.map((img: any) => {
//             const { key, name, type } = img.meta;
//             let id = key.split("/")[1];

//             return {
//                 image: {
//                     id,
//                     storage: "cache",
//                     metadata: {
//                         size: img.size,
//                         mime_type: type,
//                         filename: name
//                     }
//                 }
//             };

//         });
//         onReady(result);
//         uppy.cancelAll();
//     });
//     //return (<DragDrop uppy={uppy} />)
// }

export const LoadImage = () => {
    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 2 },
        autoProceed: true,
    })

    uppy.use(AwsS3, { companionUrl: 'https://linkstagram-api.ga/' })

    uppy.on('complete', (result) => {
        const data = result.successful


        const obj: CreatePostType = data.map(m => {
            let key = '';

            if (m.meta.key) {
                key = m.meta.key as string;
            }

            const [storage, id] = key.split("");

            return {
                postItem: {
                    description: '',
                    photos_attributes: [
                        {
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
                    ]
                }

            }
        })
        console.log('OBJ', obj)
        createPosts(obj)
    })

    return (
        <DragDrop
            uppy={uppy}
        />
    );
};

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
                        <LoadImage />
                        <Formik
                            initialValues={{
                                description: postItem.description,
                                photos_attributes: obj
                            }}
                            onSubmit={submit}
                        >
                            <Form className={style.body}>
                                {/* <UploadPhoto name='photos_attributes' /> */}
                                {/* <input type='file' name="photos_attributes" /> */}
                                {/* <GetUppy /> */}

                                {/* <div className={style.dropzoneBox}>
                                    <Dropzone
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
                                </div> */}

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

