import React, { FC, useState } from "react";
import postModal from "./PostModal.module.scss";

interface PropsPostsModal {
    closeModal: any;
}


const PostModal: FC<PropsPostsModal> = ({ closeModal }) => {
    const [isModal, setIsModal] = useState(true);

    return (
        <div>
            {isModal && (
                <div className={postModal.wrapper}>
                    <div className={postModal.container}>
                        <div className={postModal.postImg}>
                            photo
                        </div>
                        <div className={postModal.interaction}>
                            <div className={postModal.header}>
                                <div className={postModal.CloseBtn}>
                                    <button className={postModal.titleCloseBtn} onClick={() => closeModal(false)}> <i className="far fa-times-circle"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default PostModal;