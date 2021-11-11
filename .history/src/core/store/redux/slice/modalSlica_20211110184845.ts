import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    key: "ModalState",
    default: false
};

const modalSlice = createSlice({
    name: 'modal',
    ,
    reducers: {
        setModal(state, action) {
            state.key = action.payload.key;
            state.default = action.payload.default;
        },

    },
});
export const {setModal} = modalSlice.actions;

export default modalSlice.reducer;