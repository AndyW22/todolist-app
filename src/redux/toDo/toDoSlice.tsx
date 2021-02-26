import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../API';
import { RootState } from '../store';
import { addToDo, fetchToDos, removeToDo } from './toDoThunks';

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.fulfilled, (state, action: any) => {
      return action.payload.data?.listTodos?.items;
    });
    builder.addCase(addToDo.fulfilled, (state, action: any) => {
      state.push({ ...action.payload.data?.createTodo });
    });
    builder.addCase(removeToDo.fulfilled, (state, action) => {
      state.splice(action.payload, 1);
    });
  },
});

export const selectTodos = (state: RootState): Todo[] => state.todos;

export default toDoSlice.reducer;
