import React, { FC } from "react";
import headerAva from "public/images/MiniProf/header__ava.png";
import Profile from "./profileContent/Profile";
import { connect } from "react-redux";
import { AppStateType } from "core/store/redux/reduxStore";
import { GetAccountType } from "core/store/api/api";
import { Redirect } from "react-router";

type ContainerProfileType = {
    isAuth: boolean
    profile?: GetAccountType
}


const IdxProfile: FC<ContainerProfileType> = ({ isAuth, profile }) => {

    return isAuth ? (
        <div>
            <Profile
                photo={headerAva} //must be import from api
                profile={profile}
            />

        </div>
    ) : (
        <Redirect to='/signup' />
    )
}

const mapStateToprops = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    profile: state.profile.profile
})

const mapDispatchToprops = () => ({

})

export default connect(mapStateToprops, mapDispatchToprops)(IdxProfile);