import { addDoc, collection } from "@firebase/firestore";
import React, { FC, useRef, useState } from "react";
import { db, storage } from "../../../../firebase";
import m from "./Modal.module.scss"

interface PropsModal {
    closeModal: any;
}

const Modal: FC<PropsModal> = ({ closeModal }) => {
    const [isModal, setIsModal] = useState(true);
    const uploadfile = useRef(null);
    const [file, setFile] = useState(null);
    const description = useRef(null);
    const [load, setLoad] = useState(false);
    const {data: session}

    const uploadPost = async () => {
        if(load) return;

        setLoad(true);

        const documentRef = await addDoc(collection(db, 'posts'), {
            email: 
        })
    }

    const addPostImg = (e: any) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent: any) => {
            setFile(readerEvent.target.result)
        }
    }

    return (<>
        {isModal && (
            <div className={m.background}>
                <div className={m.container}>
                    <div className={m.CloseBtn}>
                        <button className={m.titleCloseBtn} onClick={() => closeModal(false)}> <i className="far fa-times-circle"></i> </button>
                    </div>
                    <div className={m.title}>
                        <h1>Upload a photo</h1>
                    </div>
                    <div className={m.body}>
                        <div className={m.fileblock}>
                            {file ? (
                                <img src={file} alt="" onClick={() => setFile(null)} />
                            ) : (
                                <div>
                                    <input
                                        ref={uploadfile}
                                        type="file"
                                        onChange={addPostImg}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={m.footer}>
                            <div className={m.descriptionblock}>
                                <input
                                    type="text"
                                    ref={description}
                                    placeholder="Enter description of post..."
                                />
                                <div>
                                <button type="button">
                                Upload Photo
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )}
    </>
    )
}

export default Modal;