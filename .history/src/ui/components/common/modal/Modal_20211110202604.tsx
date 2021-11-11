import React, { useState } from "react";
import { modalState } from "../../../../core/store/redux/slice/modalSlica";
//import { modalState } from "../../../../core/store/redux/slice/modalSlica";
import m from "./Modal.module.scss"


const Modal = () => {
    const [isModal, setIsModal] = useState(false)
    //const toggleModal = () => setIsModal(wasModal => !wasModal)
    return( <>
        {isModal && (
        
     
    ) : (

    )}
    </>  
    )
}

export default Modal;