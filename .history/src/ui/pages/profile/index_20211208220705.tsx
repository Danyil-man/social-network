import React from "react";
import headerAva from "public/images/MiniProf/header__ava.png";
import Profile from "./profileContent/Profile";
import { connect } from "react-redux";
import { AppStateType } from "core/store/redux/reduxStore";


const IdxProfile = () => {

    return (
        <div>
            <Profile
                photo={headerAva} //must be import from api
            />

        </div>
    )
}

const mapStateToprops = (state: AppStateType) => ({
    profile: state.profile.profile
})

const mapDispatchToprops = () => ({

})

export default connect(mapStateToprops, mapDispatchToprops)(IdxProfile);