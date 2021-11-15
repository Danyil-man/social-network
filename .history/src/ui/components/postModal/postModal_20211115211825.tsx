import React, { FC, useState } from "react";

interface PropsPostsModal {
    closeModal: any;
}


const PostModal:FC <PropsPostsModal> = () => {
    const [isModal, setIsModal] = useState(true);

    return(
        <div>
        {isModal && (
            <div>
               
            </div>
        )}
    </div>
    )
}
export default PostModal;