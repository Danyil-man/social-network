import { createSlice } from "@reduxjs/toolkit";

export const modalState = {
    key: "ModalState",
    default: false
};

const modalSlice = createSlice({
    name: 'modal',
    modalState,
    reducers: {
        setModal(state, action) {
            key = action.payload.key;
            state.default = action.payload.default;
        },

    },
});
export const {setModal} = modalSlice.actions;

export default modalSlice.reducer;