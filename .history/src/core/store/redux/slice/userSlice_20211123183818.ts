import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    username: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.username = action.payload.username;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.username = null;
        },
        userPost(state, action) {
            state.email = action.payload.email;
            
        }

    },
});
export const {setUser, removeUser, userPost} = userSlice.actions;

export default userSlice.reducer;