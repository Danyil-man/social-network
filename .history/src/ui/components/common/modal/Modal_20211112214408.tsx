import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { userInfo } from "os";
import React, { FC, useRef, useState } from "react";
import { userPost } from "../../../../core/store/redux/slice/userSlice";
import { db, storage } from "../../../../firebase";
import m from "./Modal.module.scss"

interface PropsModal {
    closeModal: any;
}

const Modal: FC<PropsModal> = ({ closeModal }) => {
    const [isModal, setIsModal] = useState(true);
    const uploadfile = useRef(null);
    const [file, setFile] = useState(null);
    const descriptionRef = useRef(null);
    const [load, setLoad] = useState(false);

    const uploadPost = async (state: any) => {
        if(load) return;

        setLoad(true);

        const documentRef = await addDoc(collection(db, 'posts'), {
            username: state.user.email,
            profImg: state.user.image,
            description: descriptionRef.current,
            time: serverTimestamp(),
        })

        console.log("NEW DOC ADDED WITH ID: ", documentRef.id);

        const imageRef = ref(storage, `posts/${documentRef.id}/image`);

        await uploadString(imageRef, file, "data_url").then(async snapshot => {
            const download 
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
                                    ref={descriptionRef}
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