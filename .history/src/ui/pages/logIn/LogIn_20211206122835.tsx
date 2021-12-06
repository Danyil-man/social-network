import React from "react";
import style from "./LogIn.module.scss";
import welcome from "public/images/welcome.png";
import style from "./Form.module.scss";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Formik } from "formik";



const LogIn = () => {

    const { t } = useTranslation();
    const { push } = useHistory();


    const handleLogin = (email: string, password: string) => {
        //push('/');
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.welcomeImg}>
                    <img src={welcome} alt="welcome" />
                </div>



                <div className={style.form}>
                    <div className={style.form__content}>
                        <h1 className={style.Htext}>{t('login')} </h1>
                        <div className={style.form__item}>
                            <label className={style.label}>Email</label>
                            <div className={style.input}>
                                <input type="email" placeholder="example@mail.com" required />
                            </div>
                        </div>
                        <div className={style.form__item}>
                            <label className={style.label}>{t('password')}</label>
                            <div className={style.input}>
                                <input type="password" placeholder="Type in..." required />
                            </div>
                        </div>
                    </div>

                    <div className={style.mainfooter}>
                        <button className={style.buttonContinue}>
                            {t('login')}
                        </button>
                        <div className={style.questionBlock}>
                            <p className={style.question}>{t('donthaveanacc?')} </p>
                            <Link to='/signup'>{t('signup')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
