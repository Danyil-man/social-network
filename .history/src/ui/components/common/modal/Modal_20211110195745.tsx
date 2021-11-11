import React, { useState } from "react";
//import { modalState } from "../../../../core/store/redux/slice/modalSlica";
import m from "./Modal.module.scss"


const Modal = () => {
    //const [isModal, setIsModal] = useState<boolean>(false)
    //const toggleModal = () => setIsModal(wasModal => !wasModal)
    return(
        <div className={m.background}>
           <div className={m.container}>

           <div>
            <h1>Upload a photo</h1>
           </div>
           
            <div>
                <button>
                    Upload Photo
                </button>
            </div>
           </div>
        </div>
    )
}

export default Modal;