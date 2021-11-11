import Home from './Home';
import Header from "../header";
import { useAppDispatch } from '../../../core/hooks/redux-hooks';
import { useAuth } from "../../../core/hooks/useAuth";
import { removeUser } from '../../../core/store/redux/slice/userSlice';
import { Redirect } from "react-router";

const IdxHome = () =>{

    return isAuth ? (
        <div>
        <Header/>
        <Home
        email = {email}
        deleteUser = {deleteUser} />
        </div>
    ) : (
        <Redirect to="/login" />
    );
}
 
export default IdxHome;
