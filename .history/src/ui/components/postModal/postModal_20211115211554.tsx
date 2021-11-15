import React, { useState } from "react";

const postModal = () => {
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
export default postModal;