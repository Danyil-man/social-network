import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    key: "ModalState",
    default: false
};

const modalSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },

    },
});
export const {setUser, removeUser} = modalSlice.actions;

export default modalSlice.reducer;