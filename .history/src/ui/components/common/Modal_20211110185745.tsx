import React, { useState } from "react";
import { modalState } from "../../../core/store/redux/slice/modalSlica";

const Modal = () => {
    const [open, setOpen] = useState(modalState)
    return(
        <div>
           <h1></h1> I am Modal
        </div>
    )
}

export default Modal;