import React from "react";
import Header from "../header";
import { removeUser } from '../../../core/store/redux/slice/userSlice';
import { Redirect } from "react-router";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { useAuth } from "../../../core/hooks/useAuth";
import headerAva from "../../../public/images/MiniProf/header__ava.png";
import { getAuth } from '@firebase/auth';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/common/modal/Modal';
import { useState } from 'react';
import { auth } from '../../../firebase';

const IdxProfile = () => {
    let status = `${t('signedas')} ${email}`;
    const LogOut = () => {
        auth.signOut().then(() => {
            dispatch(removeUser())
        }).catch((error) => alert(error))
    }

    return (
        <div>
            <Header
                photo={headerAva}
                status={status}
                LogOut={LogOut} />
        </div>
    )
}

export default IdxProfile;