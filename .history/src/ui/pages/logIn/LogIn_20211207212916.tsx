import React, { FC, useState } from "react";
import style from "./LogIn.module.scss";
import welcome from "public/images/welcome.png";
import styleFormik from "./Form.module.scss";
import { Redirect, useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";

type LogInType = {
    isAuth: boolean;
    logIn: (login: string, password: string) => void;
}

const LogIn: FC<LogInType> = ({ isAuth, logIn }) => {
    const { t } = useTranslation();
    const [error, setError] = useState(false)
    const submit = (values: any) => {

        logIn(values.login, values.password)
        console.log({ values }, isAuth)
    }

    return isAuth ? (
        <Redirect to='/' />
    ) : (
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
                    onSubmit={submit}

                >
                    <Form className={styleFormik.form}>
                        <div className={styleFormik.form__content}>
                            <h1 className={styleFormik.Htext}>{t('login')} </h1>
                            <div className={styleFormik.form__item}>
                                <label className={styleFormik.label}>Email</label>
                                <div className={styleFormik.input}>
                                    <Field type="email" name="login" placeholder="example@mail.com" required />

                                </div>
                            </div>
                            <div className={styleFormik.form__item}>
                                <label className={styleFormik.label}>{t('password')}</label>
                                <div className={styleFormik.input}>
                                    <Field type="password" name="password" placeholder="Type in..." required />
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
                    </Form>
                </Formik>
            </div>

        </div >
    )
}

export default LogIn;
