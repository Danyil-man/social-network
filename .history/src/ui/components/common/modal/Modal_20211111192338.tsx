import React, { FC, useState } from "react";
import m from "./Modal.module.scss"

interface PropsModal {
    closeModal: any;
}

const Modal:FC<PropsModal> = ({closeModal}) => {
    const [isModal, setIsModal] = useState(true)
    //const toggleModal = () => setIsModal(wasModal => !wasModal)
    return( <>
        {isModal && (
        <div className={m.background}>
        <div className={m.container}>
            <div className={m.CloseBtn}>
            <button className={m.titleCloseBtn} onClick={() => closeModal(false)}> <i className="far fa-times-circle"></i> </button>
            </div>
        <div className={m.title}>
         <h1>Upload a photo</h1>
         </div>
         <div className={m.body}>
         <div>
             <input 
             //ref={refPickedRef} 
             type="file" 
             hidden 
             //onChange={addImage} 
             />
         </div>
         <div className={,}>
             <input 
             type="text"
             //ref={caption}
             placeholder="Enter description of post..."
             />
         </div>
         </div>
         <div className={m.footer}>
             <button type="button">
                 Upload Photo
             </button>
         </div>
        </div>
     </div>
     
    )}
    </>  
    )
}

export default Modal;