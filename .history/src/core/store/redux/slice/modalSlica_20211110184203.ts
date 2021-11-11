import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    key: "ModalState",
    default: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal(state, action) {
            state.key = action.payload.key;
            state.default = action.payload.default;
        },

    },
});
export const {setModal, removeUser} = modalSlice.actions;

export default modalSlice.reducer;