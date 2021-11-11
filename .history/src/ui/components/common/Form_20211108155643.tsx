import React from "react";
import form from "./Form.module.scss";
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

const Form: FC<FormProps> = ({title, handleClick, questiontag, directtag, hrefDirection}) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return ( <div className={form.form}>
            <form className={form.form__content}>
                <h1 className={form.Htext}> {title} </h1>
                <div className={form.form__item}>
                    <label className={form.label}>Email</label>
                    <div className={form.input}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@mail.com" required />
                    </div>
                </div>
                <div className={form.form__item}>
                    <label className={form.label}>{t('password')}</label>
                    <div className={form.input}>
                        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Type in..." required />
                    </div>
                </div>
            </form>

                  <div className={form.mainfooter}>
            
                <button className={form.buttonContinue}  onClick={ ()=>handleClick(email,pass)}>
                    {title}
                </button>
            </div>
            </div>
        </div>
    )
}

export default Form;

