import React, { useState } from "react";
//import { modalState } from "../../../../core/store/redux/slice/modalSlica";
import m from "./Modal.module.scss"


const Modal = () => {
    //const [isModal, setIsModal] = useState<boolean>(false)
    //const toggleModal = () => setIsModal(wasModal => !wasModal)
    return(
        <div className={m.background}>
           <div className={m.container}>
            <p>hello</p>
           </div>
        </div>
    )
}

export default Modal;