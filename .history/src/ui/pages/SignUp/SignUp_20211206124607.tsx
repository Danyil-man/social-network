import React from "react";
import { useHistory } from "react-router";
import welcome from "public/images/welcome.png";
import style from "./SignUp.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styleFormik from "./Form.module.scss";




const SignUp = () => {
    const { t } = useTranslation();
    const { push } = useHistory();


    const handleRegister = (email: string, password: string) => {
        //push('/');
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.welcomeImg}>
                    <img src={welcome} alt="welcome" />
                </div>


                <div className={styleFormik.form}>
                    <form className={styleFormik.form__content}>
                        <h1 className={styleFormik.Htext}> {t('signup')} </h1>
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
                    </form>

                    <div className={styleFormik.mainfooter}>
                        <button className={styleFormik.buttonContinue}>
                            {t('signup')}
                        </button>
                        <div className={style.questionBlock}>
                            <p className={style.question}>{t('haveaccount?')}</p>
                            <Link to='/login'>{t('login')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;