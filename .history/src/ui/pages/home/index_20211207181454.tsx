import Home from './Home';
import { Redirect } from "react-router";
//import { useAuth } from 'core/hooks/useAuth';



const IdxHome = () => {


    return ? (
        <div>
            <Home />
        </div>
    )
        : (
            <Redirect to="/signup" />
        )
}




export default IdxHome;
