import { GraphQLResult } from '@aws-amplify/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { CreateTodoMutation, DeleteTodoInput, ListTodosQuery } from '../../API';
import { createTodo, deleteTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import { RemoveToDoProps } from '../../RemoveToDo';

export const fetchToDos = createAsyncThunk(
  'todos/fetch',
  async (action, thunkApi) => {
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

export const removeToDo = createAsyncThunk(
  'todos/removeToDo',
  async (action: RemoveToDoProps, thunkApi) => {
    try {
      (await API.graphql(
        graphqlOperation(deleteTodo, { input: { id: action.id } }),
      )) as GraphQLResult<DeleteTodoInput>;
      return action.index;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);
