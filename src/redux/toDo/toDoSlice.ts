import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../API';
import { RootState } from '../store';
import { userSlice } from '../user/userSlice';
import { addToDo, fetchToDos, removeToDo } from './toDoThunks';

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.fulfilled, (state, action) => {
      return action.payload?.items as Todo[];
    });
    builder.addCase(fetchToDos.rejected, () => {
      alert('Error fetching ToDos, please try logging out and back in.');
    });
    builder.addCase(addToDo.fulfilled, (state, action) => {
      state.push({ ...action.payload.data?.createTodo } as Todo);
    });
    builder.addCase(addToDo.rejected, () => {
      alert('Error adding ToDo, please try again.');
    });
    builder.addCase(removeToDo.fulfilled, (state, action) => {
      state.splice(action.payload, 1);
    });
    builder.addCase(removeToDo.rejected, () => {
      alert('Error removing ToDo, please try again.');
    });
    builder.addCase(userSlice.actions.signOut, () => {
      return [];
    });
  },
});

export const selectTodos = (state: RootState): Todo[] => state.todos;

export default toDoSlice.reducer;
