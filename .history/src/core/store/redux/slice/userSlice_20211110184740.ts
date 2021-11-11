import { createSlice } from "@reduxjs/toolkit";

const userState = {
    email: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    userState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            sate.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },

    },
});
export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;