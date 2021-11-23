import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../../../../core/hooks/useAuth";
import headerAva from "../../../../public/images/MiniProf/header__ava.png";

import Profile from "./profileContent/Profile";


const IdxProfile = () => {
    const { isAuth, email } = useAuth();
    let name = email;
    return isAuth ? (
        <div>
            <Profile
                photo={headerAva}
                name={name}
            />

        </div>
    ) : (

        <Redirect to="/login" />
    )
}

export default IdxProfile;