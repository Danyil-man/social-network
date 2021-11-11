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


const IdxHome = () => {
    const dispatch = useAppDispatch();
    const { isAuth, email} = useAuth();
    const { t } = useTranslation();
    const LogOut = () => {
        const auth = getAuth();
        auth.signOut().then( () => {
            dispatch(removeUser())
        }).catch((error)=>alert(error))
    }
    
    let status = `${t("")} ${email}`;

    return isAuth ? (
        <div>
            <Header
                photo={headerAva}
                status={status}
                LogOut={LogOut}
            />
            <Home />
        </div>
    ) : (
        <Redirect to="/login" />
    )
}
export default IdxHome;
