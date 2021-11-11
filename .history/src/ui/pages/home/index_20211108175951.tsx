import Home from './Home';
import Header from "../header";
import headerAva from "../../../public/images/MiniProf/header__ava.png";
import { removeUser } from '../../../core/store/redux/slice/userSlice';
import { Redirect } from "react-router";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { useAuth } from "../../../core/hooks/useAuth";

const IdxHome = () =>{
    const dispatch = useAppDispatch();
    const {isAuth, email} = useAuth()
    return (
        <div>
        <Header 
        photo = {headerAva}
        status = 'Signed in as ...'
        />
        <Home />
        </div>
    )
}
export default IdxHome;
