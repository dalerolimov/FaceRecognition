import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  is_active: false
};

const camera = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    disabledButton(state) {
      state.is_active = true;
    },
    onDisabledButton(state) {
      state.is_active = false;
    }
  }
});

export default camera.reducer;

export const { disabledButton, onDisabledButton } = camera.actions;
