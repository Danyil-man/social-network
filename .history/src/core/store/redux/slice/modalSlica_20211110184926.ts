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
            state = action.payload.key;
            state = action.payload.default;
        },

    },
});
export const {setModal} = modalSlice.actions;

export default modalSlice.reducer;