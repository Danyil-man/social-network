import React, { useState } from "react";
//import { modalState } from "../../../../core/store/redux/slice/modalSlica";
import m from "./Modal.module.scss"


const Modal = () => {
    //const [isModal, setIsModal] = useState<boolean>(false)
    //const toggleModal = () => setIsModal(wasModal => !wasModal)
    return(
        <div className={m.}>
           <h1>Modal</h1>
        </div>
    )
}

export default Modal;