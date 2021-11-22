import React from "react";
import style from "./Form.module.scss";
import { FC, useState, } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


interface FormProps {
    handleClick: (email: string, pass: string) => void;
    title: string;
    questiontag: string;
    directtag: string;
    hrefDirection: string;
}

const Form: FC<FormProps> = ({ title, handleClick, questiontag, directtag, hrefDirection }) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (<div className={style.form}>
        <form className={style.form__content}>
            <h1 className={style.Htext}> {title} </h1>
            <div className={style.form__item}>
                <label className={style.label}>Email</label>
                <div className={style.input}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" required />
                </div>
            </div>
            <div className={style.form__item}>
                <label className={style.label}>{t('password')}</label>
                <div className={style.input}>
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Type in..." required />
                </div>
            </div>
        </form>

        <div className={style.mainfooter}>
            <button className={style.buttonContinue} onClick={() => handleClick(email, pass)}>
                {title}
            </button>
            <div className={style.questionBlock}>
                <p className={style.question}> {questiontag} </p>
                <Link to={directtag}>{hrefDirection}</Link>
            </div>
        </div>
    </div>
    )
}

export default Form;

