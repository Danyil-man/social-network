import React from "react";
import loading from "public/images/Preloader.gif";
import style from "./Preloader.module.scss"

const Preloader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>

            </div>
            <img src={loading} />
        </div>
    )
}

export default Preloader