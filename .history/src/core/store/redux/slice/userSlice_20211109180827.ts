import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCheck: false,
    email: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.userCheck = action.payload.userCheck;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.us
        },
    },
});
export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;