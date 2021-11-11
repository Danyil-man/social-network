import Home from './Home';
import Header from "../header";
import headerAva from "../../../public/images/MiniProf/header__ava.jpg";


const IdxHome = () =>{
    return (
        <div>
        <Header 
        photo = {headerAva} />
        <Home />
        </div>
    )
}
export default IdxHome;
