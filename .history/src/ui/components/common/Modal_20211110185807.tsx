import React, { useState } from "react";
import { modalState } from "../../../core/store/redux/slice/modalSlica";

const Modal = () => {
    const [open, setOpen] = useState(modalState)
    return(
        <div>
           <h1>I am Modal</h1>
           {open && (
               <p></p></p>
           )}
        </div>
    )
}

export default Modal;