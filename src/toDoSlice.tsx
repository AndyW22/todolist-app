import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './redux/store';

interface Todo {
  id: string;
  name: string;
  description?: string;
}

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addToDo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload as Todo);
    },
  },
});

export const { addToDo } = toDoSlice.actions;

export const selectTodos = (state: RootState): any => state;

export default toDoSlice.reducer;
