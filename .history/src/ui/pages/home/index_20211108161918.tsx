import Home from './Home';
import Header from "../header";
import headerAva from "../../../public/images/MiniProf/header__ava";


const IdxHome = () =>{
    return (
        <div>
        <Header 
        headerAva = {headerAva} />
        <Home />
        </div>
    )
}
export default IdxHome;
