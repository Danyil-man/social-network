import Home from './Home';
import { Redirect } from "react-router";



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
