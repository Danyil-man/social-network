import Home from './Home';
import Header from "../header";
import { Redirect } from "react-router";
import { useAuth } from "../../../core/hooks/useAuth";


const IdxHomeURL = () => {

    const { isAuth } = useAuth();

    return isAuth ? (
        <div>
            <Home />
        </div>
    ) : (
        <Redirect to="/login" />
    )
}
export default IdxHomeURL;
