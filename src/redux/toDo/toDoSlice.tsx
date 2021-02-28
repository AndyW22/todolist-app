import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../API';
import { RootState } from '../store';
import { addToDo, fetchToDos, removeToDo } from './ToDoThunks';

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.fulfilled, (state, action) => {
      return action.payload?.items as Todo[];
    });
    builder.addCase(addToDo.fulfilled, (state, action) => {
      state.push({ ...action.payload.data?.createTodo } as Todo);
    });
    builder.addCase(removeToDo.fulfilled, (state, action) => {
      state.splice(action.payload, 1);
    });
  },
});

export const selectTodos = (state: RootState): Todo[] => state.todos;

export default toDoSlice.reducer;
