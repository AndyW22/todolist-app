import { GraphQLResult } from '@aws-amplify/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { CreateTodoMutation, ListTodosQuery } from '../../API';
import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';



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

export const addToDo = createAsyncThunk(
  'todos/addToDo',
  async (
    action: {
      name: string;
      description: string;
    },
    thunkApi,
  ) => {
    try {
      const todoresult = (await API.graphql(
        graphqlOperation(createTodo, { input: action }),
      )) as GraphQLResult<CreateTodoMutation>;
      return todoresult;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);
