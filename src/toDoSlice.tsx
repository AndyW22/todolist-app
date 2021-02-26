import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './redux/store';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { CreateTodoMutation, ListTodosQuery, Todo } from './API';
import { listTodos } from './graphql/queries';
import { createTodo } from './graphql/mutations';

export const fetchToDos = createAsyncThunk<GraphQLResult<ListTodosQuery>>(
  'todos/fetch',
  async (ignore, thunkApi) => {
    try {
      const todoData = (await API.graphql(
        graphqlOperation(listTodos),
      )) as GraphQLResult<ListTodosQuery>;
      return todoData;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);

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
  },
});

export const { addToDo, removeToDo } = toDoSlice.actions;

export const addToDoThunk = (name: string, description: string) => (
  dispatch: AppDispatch,
): void => {
  async function addToDoAsync() {
    try {
      const todo = { name, description };
      const todoresult = (await API.graphql(
        graphqlOperation(createTodo, { input: todo }),
      )) as GraphQLResult<CreateTodoMutation>;
      dispatch(addToDo(todoresult?.data?.createTodo));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }
  addToDoAsync();
};

export const selectTodos = (state: RootState): Todo[] => state.todos;

export default toDoSlice.reducer;
