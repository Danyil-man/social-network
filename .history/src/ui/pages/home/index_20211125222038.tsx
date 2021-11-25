import Home from './Home';
import { Redirect } from "react-router";
import { useAuth } from 'core/hooks/useAuth';



const IdxHome = () => {

    const { isAuth } = useAuth();

    return isAuth ? (
        <div>
            <Home />
        </div>
    ) : (
        <Redirect to="/login" />
    )
}
export default IdxHome;
