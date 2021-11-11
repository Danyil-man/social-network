import Home from './Home';
import Header from "../header";
import home from "./Home.module.scss";
import { removeUser } from '../../../core/store/redux/slice/userSlice';
import { Redirect } from "react-router";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { useAuth } from "../../../core/hooks/useAuth";
import headerAva from "../../../public/images/MiniProf/header__ava.png";
import { getAuth } from '@firebase/auth';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/common/modal/Modal';
import { useState } from 'react';


const IdxHome = () => {
    const [isModal, setIsModal] = useState(true)
    const dispatch = useAppDispatch();
    const { isAuth, email} = useAuth();
    const { t } = useTranslation();
    const LogOut = () => {
        const auth = getAuth();
        auth.signOut().then( () => {
            dispatch(removeUser())
        }).catch((error)=>alert(error))
    }
    let status = `${t('signedas')} ${email}`;

    return isAuth ? (
        <div>
            <Header
                photo={headerAva}
                status={status}
                LogOut={LogOut}
            />
            {isModal && <Modal />}
            <Home />
        </div>
    ) : (
        <Redirect to="/login" />
    )
}
export default IdxHome;
