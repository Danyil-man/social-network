import React, { FC, useRef, useState } from "react";
import m from "./Modal.module.scss"

interface PropsModal {
    closeModal: any;
}

const Modal: FC<PropsModal> = ({ closeModal }) => {
    const [isModal, setIsModal] = useState(true);
    const uploadfile = useRef(null);
    const [file, setFile] = useState(null);

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
                        <div>
                        {file ? (
                            <img src={file} alt="" onClick={ ()=> setFile(null)} />
                        ) : (
                            <div onClick={() => uploadfile}>
                                <input
                                    ref={uploadfile}
                                    type="file"
                                    onChange={addPostImg}
                                />
                            </div>
                        )}
                        </div>
                        <div className={m.descriptionblock}>
                            <input
                                type="text"
                                //ref={caption}
                                placeholder="Enter description of post..."
                            />
                        </div>
                        <div className={m.footer}>
                        <button type="button">
                            Upload Photo
                        </button>
                    </div>
                    </div>
                </div>
            </div>

        )}
    </>
    )
}

export default Modal;