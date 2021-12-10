import React, { FC } from "react";
import headerAva from "public/images/MiniProf/header__ava.png";
import Profile from "./profileContent/Profile";
import { connect } from "react-redux";
import { AppStateType } from "core/store/redux/reduxStore";
import { AccountType, GetAccountType } from "core/store/api/api";
import { Redirect } from "react-router";
import { editProfile } from "core/store/reducers/profileReducer";
import { getIsLoading } from "core/store/selectors";

type ContainerProfileType = {
    isAuth: boolean
    profile?: GetAccountType
    editProfile: (account: AccountType) => void
    isLoading: boolean
}


const IdxProfile: FC<ContainerProfileType> = ({ isAuth, profile, editProfile }) => {

    return isAuth ? (
        <div>
            <Profile
                photo={headerAva} //must be import from api
                profile={profile}
                editProfile={editProfile}
            />

        </div>
    ) : (
        <Redirect to='/signup' />
    )
}

const mapStateToprops = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    profile: state.profile.profile,
    isLoading: getIsLoading(state)
})



export default connect(mapStateToprops, { editProfile })(IdxProfile);