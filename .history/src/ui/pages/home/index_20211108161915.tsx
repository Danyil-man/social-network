import Home from './Home';
import Header from "../header";
import headerAva from "../../../public/images/MiniProf/";


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
