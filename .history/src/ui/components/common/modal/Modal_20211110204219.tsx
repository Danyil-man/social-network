import React, { useState } from "react";
import { modalState } from "../../../../core/store/redux/slice/modalSlica";
//import { modalState } from "../../../../core/store/redux/slice/modalSlica";
import m from "./Modal.module.scss"

interface PropsModal {
    closeModal: any;
}

const Modal = (props: PropsModal) => {
    const [isModal, setIsModal] = useState(true)
    //const toggleModal = () => setIsModal(wasModal => !wasModal)
    return( <>
        {isModal && (
        <div className={m.background}>
        <div className={m.container}>
            <button> X </button>
        <div>
         <h1>Upload a photo</h1>
         <div>
             <input 
             //ref={refPickedRef} 
             type="file" 
             hidden 
             //onChange={addImage} 
             />
         </div>
         <div>
             <input 
             type="text"
             //ref={caption}
             placeholder="Enter description..."
             />
         </div>
        </div>
        
         <div>
             <button>
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