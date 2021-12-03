import React from "react";
import style from "./Header.module.scss";
import logo from "public/images/logo.png";
import language from "public/images/language.svg";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { useState } from "react";
import HttpApi from 'i18next-http-backend'
//import { useAuth } from "core/hooks/useAuth";
import { Link } from "react-router-dom";
//import { useAppDispatch } from "core/hooks/redux-hooks";
//import { auth } from "firebase";
//import { removeUser } from "core/store/redux/slice/userSlice";
import headerAva from "public/images/MiniProf/header__ava.png";


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ["en", "ua"],
        fallbackLng: "en",
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'path'],
            caches: ['cookie']
        },

        backend: {
            loadPath: '../language/{{lng}}/translation.json',
            //../../../../public/language/{{lng}}/translation.json
            //../language/{{lng}}/translation.json
        },

        react: {
            useSuspense: false
        },

    });

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isStatus, setIsStatus] = useState(false);
    const { t } = useTranslation();

}

const languages = [
    {
        code: 'en',
        name: 'EN',
        country_code: 'en',
    },
    {
        code: 'ua',
        name: 'UA',
        country_code: 'ua',
    },
]

let status = { t('signedas') }
return (
    <div className={style.header}>
        <div className={style.content}>
            <div className={style.logo}>
                <Link to="/"> <img src={logo} alt="logo" /></Link>
            </div>
            <div className={style.right__content}>
                <div className={style.dropdown}>
                    <div className={style.dropwownbtn} onClick={(e) => setIsActive(!isActive)}>
                        <img width={35} src={language} alt="language" />
                    </div>
                    {isActive && (
                        <div className={style.dropdowncontent}>
                            {languages.map(({ code, name, country_code }) => (
                                <div className={style.dropback} key={country_code}>
                                    <button className={style.dropdownitem} onClick={() => i18next.changeLanguage(code)}>
                                        <p>{name}</p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {isAuth && (
                    <div className={style.status__content}>
                        <div className={style.miniava} onClick={(e) => setIsStatus(!isStatus)}>
                            <img width={40} src={headerAva} alt="ava" />
                        </div>
                        {isStatus && (
                            <div className={style.status__dropdown}>
                                <p>{status}</p>
                                <div className={style.profile__navigation}>
                                    <Link to='/profile'>Profile</Link>
                                </div>
                                <div className={style.profile__footer}>
                                    <button className={style.btnLogOut} onClick={() => LogOut()}>
                                        Log out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )
                }
            </div>
        </div>
    </div>

);
}

export default Header;