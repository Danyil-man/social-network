import React from "react";
import { useHistory } from "react-router";
import welcome from "public/images/welcome.png";
import style from "./SignUp.module.scss";
import { useTranslation } from "react-i18next";
import Form from "ui/components/form/Form";




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


                <div className={style.form}>
                    <form className={style.form__content}>
                        <h1 className={style.Htext}> {t('signup')} </h1>
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


                <Form
                    handleClick={handleRegister}
                    title={t('signup')}
                    questiontag={t('haveaccount?')}
                    directtag='/login'
                    hrefDirection={t('login')}
                />
            </div>
        </div>
    )
}

export default SignUp;