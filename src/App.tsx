import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import awsExports from './aws-exports';
import { ListTodosQuery } from './API';
import { ToDoList } from './toDoList';
import { Container, Input, ButtonContainer, TitleContainer } from './Styles';
import { selectTodos } from './toDoSlice';
import { useAppSelector } from './redux/store';

Amplify.configure(awsExports);
const initialState = { name: '', description: '' };
const App: React.FC = () => {
  const toDosRedux = useAppSelector(selectTodos);
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState<any[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = (await API.graphql(
        graphqlOperation(listTodos),
      )) as GraphQLResult<ListTodosQuery>;
      const todos = todoData?.data?.listTodos?.items;
      if (todos) {
        setTodos(todos);
      }
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <Container>
      <TitleContainer>Todo list</TitleContainer>
      <h1>Add A Todo</h1>
      <Input
        onChange={(event) => setInput('name', event.target.value)}
        className="input"
        value={formState.name}
        placeholder="Name"
      />
      <Input
        onChange={(event) => setInput('description', event.target.value)}
        className="input"
        value={formState.description}
        placeholder="Description"
      />
      <ButtonContainer
        variant="contained"
        color="primary"
        className="button"
        onClick={addTodo}
      >
        Create Todo
      </ButtonContainer>
      <h1>Your Todos</h1>
      {todos.map((todo, index) => (
        <ToDoList {...todo} key={todo.id ? todo.id : index} />
      ))}
    </Container>
  );
};

export default App;
