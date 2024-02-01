import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    ToDo: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
   addTodos(state,action){
   state.ToDo.push(action.payload)
   },
   removeTodos(state, action){
    state.ToDo = state.ToDo.filter(item => item.id !== action.payload.id);
   },

  }
});

export const { addTodos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;