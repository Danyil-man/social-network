import Home from './Home';
import Header from "../header";
import headerAva from "../../../public/images/MiniProf/header__ava.png";


const IdxHome = () =>{
    const dispatch = useAppDispatch();
    const {isAuth, email} = useAuth()
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