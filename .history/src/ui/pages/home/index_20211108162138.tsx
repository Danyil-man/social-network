import Home from './Home';
import Header from "../header";
import headerAva from "../../../public/images/MiniProf/header__ava.png";


const IdxHome = () =>{
    return (
        <div>
        <Header 
        photo = {headerAva} />
        des = ''
        <Home />
        </div>
    )
}
export default IdxHome;
