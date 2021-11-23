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
    const [isModal, setIsModal] = useState(false)
    const dispatch = useAppDispatch();
    const { isAuth, email } = useAuth();
    const { t } = useTranslation();
    const LogOut = () => {
        auth.signOut().then(() => {
            dispatch(removeUser())
        }).catch((error) => alert(error))
    }
    let status = `${t('signedas')} ${email}`;

    return isAuth ? (
        <div>
            {/* <Header
                photo={headerAva}
                status={status}
                LogOut={LogOut}
            /> */}

            <Home />
        </div>
    ) : (
        <Redirect to="/login" />
    )
}
export default IdxHome;
