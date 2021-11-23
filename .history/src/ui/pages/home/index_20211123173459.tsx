import Home from './Home';
import Header from "../header";
import { removeUser } from '../../../core/store/redux/slice/userSlice';
import { Redirect } from "react-router";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { useAuth } from "../../../core/hooks/useAuth";
import headerAva from "../../../public/images/MiniProf/header__ava.png";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { auth } from '../../../firebase';


const IdxHome = () => {

    const { isAuth } = useAuth();


    return isAuth ? (
        <div>
            <Home />
        </div>
    ) : (
        <Redirect to="/login" />
    )
}
export default IdxHome;
