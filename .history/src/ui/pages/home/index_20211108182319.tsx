import Home from './Home';
import Header from "../header";
import { removeUser } from '../../../core/store/redux/slice/userSlice';
import { Redirect } from "react-router";
import { useAppDispatch } from "../../../core/hooks/redux-hooks";
import { useAuth } from "../../../core/hooks/useAuth";
import headerAva from "../../../public/images/MiniProf/header__ava.png";

const IdxHome = () =>{
    const dispatch = useAppDispatch();
    const {isAuth, email} = useAuth();
    let status = `${<em>Signed in as:</em> ${email}`;

    return isAuth ? (
        <div>
        <Header 
        photo = {headerAva}
        status = {status}
        />
            <button onClick={ ()=> dispatch(removeUser())}>
                Log out as {email}
            </button>
        <Home />
        </div>
    ) : (
        <Redirect to="/login" />
    )
}
export default IdxHome;
