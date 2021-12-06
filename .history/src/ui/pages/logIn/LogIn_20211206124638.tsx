import React from "react";
import style from "./LogIn.module.scss";
import welcome from "public/images/welcome.png";
import styleFormik from "./Form.module.scss";
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
                <Formik
                    initialValues={{
                        login: '',
                        password: ''
                    }}
                    onSubmit={alert('signup')}
                >
                    <div className={styleFormik.form}>
                        <div className={styleFormik.form__content}>
                            <h1 className={styleFormik.Htext}>{t('login')} </h1>
                            <div className={styleFormik.form__item}>
                                <label className={styleFormik.label}>Email</label>
                                <div className={styleFormik.input}>
                                    <input type="email" placeholder="example@mail.com" required />
                                </div>
                            </div>
                            <div className={styleFormik.form__item}>
                                <label className={styleFormik.label}>{t('password')}</label>
                                <div className={styleFormik.input}>
                                    <input type="password" placeholder="Type in..." required />
                                </div>
                            </div>
                        </div>

                        <div className={styleFormik.mainfooter}>
                            <button className={styleFormik.buttonContinue}>
                                {t('login')}
                            </button>
                            <div className={styleFormik.questionBlock}>
                                <p className={styleFormik.question}>{t('donthaveanacc?')} </p>
                                <Link to='/signup'>{t('signup')}</Link>
                            </div>
                        </div>
                    </div>
                </Formik>
            </div>

        </div>
    );
}

export default LogIn;
