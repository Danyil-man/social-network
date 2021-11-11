import React from "react";
import { useHistory } from "react-router";
import welcome from "../../../public/images/welcome.png";
import sign from "./SignUp.module.scss";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../../core/store/redux/slice/userSlice';
import Form from "../../components/common/form/Form";
import { useTranslation } from "react-i18next";

const SignUp = () => {
    const { t } = useTranslation();
    const { push } = useHistory();
    const dispatch = useAppDispatch();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        console.log(auth);
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
        <div className={sign.wrapper}>
            <div className={sign.content}>
                <div className={sign.welcomeImg}>
                    <img src={welcome} alt="welcome" />
                </div>

                <Form
                    handleClick={handleRegister}
                    title={t('signup')}
                    questiontag = {t('haveaccount?')}
                    directtag = '/login'
                    hrefDirection = {t('login')}
                />


            </div>
        </div>
    )
}

export default SignUp;