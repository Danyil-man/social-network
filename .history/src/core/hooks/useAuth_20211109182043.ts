import { useAppSelector } from "./redux-hooks";

export function useAuth(){
    const {userCheck ,email, token, id} = useAppSelector(state => state.user);

    return{
        isAuth: {!!email,
        email,
        token,
        id,
    };
}