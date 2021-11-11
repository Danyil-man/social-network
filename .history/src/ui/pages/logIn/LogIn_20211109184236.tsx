import React from "react";
import login from "./LogIn.module.scss";
import welcome from "../../../public/images/welcome.png";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { useHistory } from "react-router";
import Form from "../../components/common/Form";
import { useTranslation } from "react-i18next";
import { setUser } from "../../../core/store/redux/slice/userSlice";

const LogIn = () =>{
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
   const {push} = useHistory();

     const handleLogin = (email: string, password:string) =>{
       const auth = getAuth();
        return{}

        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
            }));

            push('/');
        })
        .catch((error) => console.log(error))
    }

    return(
        <div className={login.wrapper}>
            <div className={login.content}>
                <div className={login.welcomeImg}>
                    <img src={welcome} alt="welcome" />
                </div>

                <Form 
                handleClick={handleLogin}
                title = {t('login')}
                questiontag = {t('donthaveanacc?')}
                directtag = '/signup'
                hrefDirection = {t('signup')}
                />

            </div>
        </div>
    );
}

export default LogIn;
