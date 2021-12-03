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