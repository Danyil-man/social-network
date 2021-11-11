import React from "react";
import { useHistory } from "react-router";
import welcome from "../../../public/images/welcome.png";
import sign from "./SignUp.module.scss";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../../core/store/redux/slice/userSlice';
import Form from "../../components/common/Form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { t } = useTranslation();
 const {push} = useHistory();
    const dispatch = useAppDispatch();

    const handleRegister = (email: string, password:string) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
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
                />

                <div className={sign.question}>
                    <p className={sign.question}>{t('haveaccount?')} </p>
                    <Link to="/login">{t('login')}</Link>
                </div>

            </div>
        </div>
    )
}

export default SignUp;