import Amplify from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Todo } from './API';
import awsExports from './aws-exports';
import { useAppDispatch, useAppSelector } from './redux/store';
import { ButtonContainer, Container, Input, TitleContainer } from './Styles';
import { ToDoList } from './toDoList';
import { selectTodos, fetchToDos, addToDoThunk } from './toDoSlice';

Amplify.configure(awsExports);
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialState = { name: '', description: '' };
  const [formState, setFormState] = useState(initialState);
  useEffect(() => {
    dispatch(fetchToDos());
  }, []);
  const todos: Todo[] = useAppSelector(selectTodos);
  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  function addTodo() {
    console.log(formState.name, formState.description);
    if (!formState.name || !formState.description) return;
    try {
      dispatch(addToDoThunk(formState.name, formState.description));
      setFormState(initialState);
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
      {todos.map((todo: Todo, index: number) => (
        <ToDoList {...todo} key={todo.id ? todo.id : index} />
      ))}
    </Container>
  );
};

export default App;
