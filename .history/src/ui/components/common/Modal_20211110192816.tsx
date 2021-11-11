import React, { useState } from "react";
import { modalState } from "../../../core/store/redux/slice/modalSlica";

const Modal = () => {
    const [isModal, setIsModal] = useState<(modalState)
    const toggleModal = () => setIsModal(wasModal => !wasModal)
    return(
        <div>
           <h1>I am Modal</h1>
        </div>
    )
}

export default Modal;