import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    default: false,
    key: 'modalState'
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.email;
            state.token = action.token;
            state.id = action.id;
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