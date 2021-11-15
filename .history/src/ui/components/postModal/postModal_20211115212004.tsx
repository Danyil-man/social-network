import React, { FC, useState } from "react";
import postModal from "./PostModal.module.scss";

interface PropsPostsModal {
    closeModal: any;
}


const PostModal:FC <PropsPostsModal> = () => {
    const [isModal, setIsModal] = useState(true);

    return(
        <div>
        {isModal && (
            <div className={postModal.wrapper}>
               
            </div>
        )}
    </div>
    )
}
export default PostModal;