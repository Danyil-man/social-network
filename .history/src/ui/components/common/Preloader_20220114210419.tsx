import React from "react";
import loading from "public/images/Preloader.gif";
import style from "./Preloader.module.scss"

const Preloader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src={loading} alt="preloader" />
            </div>
        </div>
    )
}

export default Preloader