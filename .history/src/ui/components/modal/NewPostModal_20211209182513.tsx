import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore";
import { ref, getDownloadURL, uploadString, uploadBytesResumable } from "@firebase/storage";
import React, { FC, useRef, useState } from "react";
//import { userPost } from "core/store/redux/slice/userSlice";
import style from "./Modal.module.scss"

interface PropsModal {
    closeModal: any;
}

const NewPostModal: FC<PropsModal> = ({ closeModal }) => {
    const [isModal, setIsModal] = useState(true);
    const uploadfile = useRef(null);
    const [file, setFile] = useState(null);
    const descriptionRef = useRef(null);
    const [prog, setProg] = useState(0);



    return (<div>
        {isModal && (
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.CloseBtn}>
                        <button className={style.titleCloseBtn} onClick={() => closeModal(false)}> <i className="far fa-times-circle"></i> </button>
                    </div>
                    <div className={style.title}>
                        <h1>Upload a photo</h1>
                    </div>
                    <div className={style.body}>
                        <div className={style.fileblock}>
                            {file ? (
                                <img src={file} alt="" onClick={() => setFile(null)} />
                            ) : (
                                <div>
                                    <input
                                        ref={uploadfile}
                                        type="file"

                                    />
                                </div>
                            )}
                        </div>
                        <div className={style.footer}>
                            <div className={style.descriptionblock}>
                                <input
                                    type="text"
                                    ref={descriptionRef}
                                    placeholder="Enter description of post..."
                                />
                                <div>
                                    <button
                                        type="button"

                                        disabled={!file}
                                    >
                                        Upload Post
                                    </button>
                                    <h4>Uploaded {prog}%</h4>
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

export default Modal;