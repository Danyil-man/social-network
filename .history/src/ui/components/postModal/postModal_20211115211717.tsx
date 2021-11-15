import React, { useState } from "react";

const PostModal = () => {
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