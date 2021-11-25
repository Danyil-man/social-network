import React from "react";
import { useHistory } from "react-router";
import welcome from "../../../public/images/welcome.png";
import style from "./SignUp.module.scss";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useTranslation } from "react-i18next";
import { auth } from "firebase";
import Form from "ui/components/common/form/Form";
import { setUser } from "core/store/redux/slice/userSlice";



const SignUp = () => {
    const { t } = useTranslation();
    const { push } = useHistory();
    const dispatch = useAppDispatch();

    const handleRegister = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                push('/');
            })
            .catch(console.error)
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