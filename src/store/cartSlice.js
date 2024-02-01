import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.value.push(action.payload);
    },
    remove(state, action) {
        state.value = state.value.filter(item => item.id !== action.payload.id);
    }
  }
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
