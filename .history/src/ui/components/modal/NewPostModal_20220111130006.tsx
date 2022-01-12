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



type PropsModal = {
    closeModal: (setIsModal: boolean) => void;
    createPosts: (postItem: CreatePostType) => void
    isLoading: boolean
    postItem: CreatePostType
}
// export interface UploadableFile {
//     file: File;
// }

export const CreateUppy = () => {
    const [files, setFiles] = useState([])
    const uppy = new Uppy({
        meta: { type: "avatar" },
        restrictions: {
            maxNumberOfFiles: 2,
            allowedFileTypes: ["image/*"],
        },
        autoProceed: true,
    });

    uppy.use(AwsS3, {
        //resume: true,
        //retryDelays: [0, 1000, 3000, 5000],
        //endpoint: "https://linkstagram-api.ga/",
        companionUrl: "https://linkstagram-api.ga/",
    });

    function uploadFiles() {
        files.forEach((file: any) => {
            const { name, type } = file;
            uppy.addFile({
                name,
                type,
                data: file,
                source: "cache",
            });
        });

        uppy.upload().then((x: any) => {
            let data: any = x.successful;
            let result = data.map((img: any) => {
                const { key, name, type } = img.meta;
                let id = key.split("/")[1];

                return {
                    image: {
                        id,
                        storage: "cache",
                        metadata: {
                            size: img.size,
                            mime_type: type,
                            filename: name
                        }
                    }
                };

            });
            console.log('result', result)
            //onReady(result);
            //uppy.cancelAll();
        });
        //return (<DragDrop uppy={uppy} />)
    }
    //return uppy;
    return (
        <>
            <DragDrop uppy={uppy} />
        </>
    )
}

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

const NewPostModal: FC<PropsModal> = ({ closeModal, postItem,
    isLoading, createPosts }) => {
    const [isModal, setIsModal] = useState(true);

    type UploadPhotoType = {

        //obj: Array<ImagePhotoType>
    }
    // const UploadPhoto = ({ name }: { name: string }) => {
    //     // const [_, __, helpers] = useField(name)
    //     // const [files, setFiles] = useState<UploadableFile[]>([])
    //     // setFiles((curr) => [...curr])
    //     // useEffect(() => {
    //     //     helpers.setValue(files)
    //     // }, [files])

    //     // function onUpload(file: File) {
    //     //     setFiles((curr) =>
    //     //         curr.map((fw) => {
    //     //             if (fw.file === file) {
    //     //                 return { ...fw };
    //     //             }
    //     //             return fw;
    //     //         })
    //     //     );
    //     // }


    //     const uppy = new Uppy({
    //         meta: { type: 'photos' },
    //         restrictions: { maxNumberOfFiles: 2 },
    //         autoProceed: true
    //     })
    //     uppy.use(AwsS3, { companionUrl: 'https://linkstagram-api.ga' })
    //     uppy.on('upload-success', (result) => {
    //         // const data = result.successful

    //         // let obj: Array<ImagePhotoType> = data.map(item => {

    //         //     let key = '';

    //         //     if (item.meta.key) {
    //         //         key = item.meta.key as string;
    //         //     }
    //         //     const [storage, id] = key.split('/')

    //         //     return {
    //         //         image: {
    //         //             id,
    //         //             storage,
    //         //             metadata: {
    //         //                 filename: item.name,
    //         //                 size: item.size,
    //         //                 mime_type: item.meta.type || ''
    //         //             }
    //         //         }
    //         //     }

    //         // })
    //         console.log('Photo', 'result:', result)
    //         //createPosts(obj)
    //     })
    //     return (
    //         <>
    //             <DragDrop uppy={uppy} />
    //         </>
    //     )
    // }





    const obj: Array<ImagePhotoType> = postItem.photos_attributes
    console.log('obj', obj)

    const submit = (values: any) => {
        //uploadPhoto()
        //uploadFiles(uppy, File, obj)
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
                                photos_attributes: obj
                            }}
                            onSubmit={submit}
                        >
                            <Form className={style.body}>
                                {/* <UploadPhoto name='photos_attributes' /> */}
                                {/* <input type='file' name="photos_attributes" /> */}
                                <CreateUppy />
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

