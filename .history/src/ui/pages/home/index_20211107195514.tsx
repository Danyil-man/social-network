import Home from './Home';
import Header from "../header";
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
