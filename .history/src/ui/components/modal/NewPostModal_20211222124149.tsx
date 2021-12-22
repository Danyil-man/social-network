import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { ref, getDownloadURL, uploadString, uploadBytesResumable } from "@firebase/storage";
import React, { FC, useRef, useState } from "react";
import Preloader from "../common/Preloader";
import style from "./Modal.module.scss"

interface PropsModal {
    closeModal: (setIsModal: boolean) => void;
    isLoading: boolean
}

const NewPostModal: FC<PropsModal> = ({ closeModal, isLoading }) => {
    const [isModal, setIsModal] = useState(true);

    return (
        <div>
            {isLoading ? <Preloader /> : null}
            {isModal && (
                <div className={style.wrapper}>
                    <div className={style.container}>
                        <div className={style.title}>
                            <h1>Upload a photo</h1>
                        </div>
                        <div className={style.body}>
                            <div className={style.fileblock}>

                            </div>
                            <div className={style.footer}>
                                <div className={style.descriptionblock}>
                                    <input
                                        type="text"
                                        placeholder="Enter description of post..."
                                    />
                                    <div className={style.modalFooter}>
                                        <button onClick={() => setIsModal(false)} className={style.cancelBtn}>
                                            Cancel
                                        </button>
                                        <button className={style.saveBtn} type="submit">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default NewPostModal;