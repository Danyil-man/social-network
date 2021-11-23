import React from "react";
import Header from "../../header";
import { removeUser } from '../../../../core/store/redux/slice/userSlice';
import { Redirect } from "react-router";
import { useAppDispatch } from "../../../../core/hooks/redux-hooks";
import { useAuth } from "../../../../core/hooks/useAuth";
import headerAva from "../../../../public/images/MiniProf/header__ava.png";
import { useTranslation } from 'react-i18next';
import { auth } from '../../../../firebase';
import Profile from "./profileContent/Profile";


const IdxProfile = () => {
    const dispatch = useAppDispatch();
    const { isAuth, email } = useAuth();
    let name = email;
    return isAuth ? (
        <div>
            <Profile
                photo={headerAva}
                name={name}
            />

        </div>
    ) : (

        <Redirect to="/login" />
    )
}

export default IdxProfile;