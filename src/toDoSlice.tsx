import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './redux/store';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { CreateTodoMutation, ListTodosQuery, Todo } from './API';
import { listTodos } from './graphql/queries';
import { createTodo } from './graphql/mutations';

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addToDo: (state, action) => {
      state.push({ ...action.payload });
    },
    fetchToDosStart: (state) => {
      return state;
    },
    fetchToDosSuccess: (state, action) => {
      return action.payload;
    },
    fetchToDosFailure: (state, action) => {
      console.log(`error fetching todos: ${action} `);
      return state;
    },
    removeToDo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const {
  addToDo,
  fetchToDosStart,
  fetchToDosSuccess,
  fetchToDosFailure,
  removeToDo,
} = toDoSlice.actions;

export const fetchToDos = () => (dispatch: AppDispatch): void => {
  async function fetch() {
    try {
      dispatch(fetchToDosStart());
      const todoData = (await API.graphql(
        graphqlOperation(listTodos),
      )) as GraphQLResult<ListTodosQuery>;
      const todos = todoData?.data?.listTodos?.items;
      dispatch(fetchToDosSuccess(todos));
    } catch (err) {
      dispatch(fetchToDosFailure(err));
    }
  }
  fetch();
};

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
