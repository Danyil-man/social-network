import Home from './Home';
import Header from "../header";
import headerAva from "header__ava.png";


const IdxHome = () =>{
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
