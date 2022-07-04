import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalState: false,
  postIdState: "id",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModalState: (state, action) => {
      state.modalState = action.payload;
    },
    handlePostIdState: (state, action) => {
      state.postIdState = action.payload;
    },
  },
});

export const { handleModalState, handlePostIdState } = modalSlice.actions;
export default modalSlice.reducer;
