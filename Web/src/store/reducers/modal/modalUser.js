import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalCreateUser: true,
  modalEditUser: false
};

const modalUser = createSlice({
  name: 'modalUser',
  initialState,
  reducers: {
    modalCreateOpen(state) {
      state.modalCreateUser = true;
    },

    modalCreateClose(state) {
      state.modalCreateUser = false;
    },

    modalEditOpen(state) {
      state.modalEditUser = true;
    },

    modalEditClose(state) {
      state.modalEditUser = false;
    }
  }
});

export default modalUser.reducer;

export const { modalCreateOpen, modalCreateClose, modalEditOpen, modalEditClose } = modalUser.actions;
