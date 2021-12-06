import React, { FC } from "react";
import { Redirect } from "react-router";
import welcome from "public/images/welcome.png";
import style from "./SignUp.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styleFormik from "./Form.module.scss";
import { Field, Form, Formik } from "formik";

type SignUpType = {
    registration: () => void
    isAuth: boolean
}


const SignUp: FC<SignUpType> = ({ registration, isAuth }) => {
    const { t } = useTranslation();

    const submit = (values: any) => {
        registration()
        //push('/');
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
                        username: '',
                        login: '',
                        password: ''
                    }}
                    onSubmit={submit}

                >
                    <Form className={styleFormik.form}>
                        <div className={styleFormik.form__content}>
                            <h1 className={styleFormik.Htext}> {t('signup')} </h1>
                            <div className={styleFormik.form__item}>
                                <label className={styleFormik.label}>Email</label>
                                <div className={styleFormik.input}>
                                    <Field type="text" name="username" placeholder="john_doe" required />
                                </div>
                            </div>
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
                            <div className={styleFormik.mainfooter}>
                                <button type="submit" className={styleFormik.buttonContinue}>
                                    {t('signup')}
                                </button>
                                <div className={styleFormik.questionBlock}>
                                    <p className={styleFormik.question}>{t('haveaccount?')}</p>
                                    <Link to='/login'>{t('login')}</Link>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div >
    )

}

export default SignUp;