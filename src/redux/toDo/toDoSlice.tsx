import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../API';
import { RootState } from '../store';
import { addToDo, fetchToDos } from './toDoThunks';

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addToDo: (state, action) => {
      state.push({ ...action.payload });
    },
    removeToDo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.fulfilled, (state, action: any) => {
      return action.payload.data?.listTodos?.items;
    });
    builder.addCase(addToDo.fulfilled, (state, action: any) => {
      state.push({ ...action.payload.data?.createTodo });
    });
  },
});

export const { removeToDo } = toDoSlice.actions;

export const selectTodos = (state: RootState): Todo[] => state.todos;

export default toDoSlice.reducer;
