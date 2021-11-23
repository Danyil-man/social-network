import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../../../../core/hooks/useAuth";
import headerAva from "../../../../public/images/MiniProf/header__ava.png";

import Profile from "./profileContent/Profile";


const IdxProfile = () => {
    const { email } = useAuth();
    let name = email;
    return (
        <div>
            <Profile
                photo={headerAva}
                name={name}
            />

        </div>
    )
}

export default IdxProfile;