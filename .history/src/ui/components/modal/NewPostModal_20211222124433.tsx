import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { ref, getDownloadURL, uploadString, uploadBytesResumable } from "@firebase/storage";
import { Form, Formik } from "formik";
import React, { FC, useRef, useState } from "react";
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"

interface PropsModal {
    closeModal: (setIsModal: boolean) => void;
    isLoading: boolean
}

const NewPostModal: FC<PropsModal> = ({ closeModal, isLoading }) => {
    const [isModal, setIsModal] = useState(true);
    const submit = (values: any) => {

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
                                onSubmit={ submit }
                            }}>
                            <Form className={style.body}>
                                <div className={style.fileblock}>

                                </div>
                                <div className={style.footer}>
                                    <div className={style.descriptionblock}>
                                        <input
                                            type="text"
                                            placeholder="Enter description of post..."
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