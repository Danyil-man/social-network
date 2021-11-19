import React from "react";
import h from "./Header.module.scss";
import logo from "../../../public/images/logo.png";
import language from "../../../public/images/language.svg";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { useState } from "react";
import HttpApi from 'i18next-http-backend'
import { useAuth } from "../../../core/hooks/useAuth";
import { Link } from "react-router-dom";
import IdxProfile from "../home/profile";

interface HeaderProps {
    photo: string;
    status: string;
    LogOut: any;
}

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

const Header = (props: HeaderProps) => {
    const { isAuth } = useAuth();
    const [isActive, setIsActive] = useState(false);
    const [isStatus, setIsStatus] = useState(false);

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

    return (
        <div className={h.header}>
            <div className={h.content}>
                <div className={h.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={h.right__content}>
                    <div className={h.dropdown}>
                        <div className={h.dropwownbtn} onClick={(e) => setIsActive(!isActive)}>
                            <img width={35} src={language} alt="language" />
                        </div>
                        {isActive && (
                            <div className={h.dropdowncontent}>
                                {languages.map(({ code, name, country_code }) => (
                                    <div className={h.dropback} key={country_code}>
                                        <button className={h.dropdownitem} onClick={() => i18next.changeLanguage(code)}>
                                            <p>{name}</p>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {isAuth && (
                        <div className={h.status__content}>
                            <div className={h.miniava} onClick={(e) => setIsStatus(!isStatus)}>
                                <img src={props.photo} alt="ava" />
                            </div>
                            {isStatus && (
                                <div className={h.status__dropdown}>
                                    <p>{props.status}</p>
                                    <div>
                                        <Link to='/profile'>Profile</Link>
                                    </div>
                                    <button className={h.btnLogOut} onClick={() => props.LogOut()}>
                                        Log out
                                    </button>
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