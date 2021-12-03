import React from "react";
import style from "./LogIn.module.scss";
import welcome from "public/images/welcome.png";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import Form from "ui/components/form/Form";



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

                <Form
                    handleClick={handleLogin}
                    title={t('login')}
                    questiontag={t('donthaveanacc?')}
                    directtag='/signup'
                    hrefDirection={t('signup')}
                />

            </div>
        </div>
    );
}

export default LogIn;
