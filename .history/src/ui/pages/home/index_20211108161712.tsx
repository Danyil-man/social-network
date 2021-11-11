import Home from './Home';
import Header from "../header";
import headerAva from "../../../public/images/";


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
