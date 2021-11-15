import React, { useState } from "react";

const PostModal = () => {
    const [isModal, setIsModal] = useState(true);

    return(
        <div>
        {isModal && (
            <div>
                PostModal
            </div>
        )}
    </div>
    )
}
export default PostModal;