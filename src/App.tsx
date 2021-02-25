import Amplify from 'aws-amplify';
import React, { useEffect } from 'react';
import AddToDoContainer from './AddToDoContainer';
import { Todo } from './API';
import awsExports from './aws-exports';
import { useAppDispatch, useAppSelector } from './redux/store';
import { Container,  TitleContainer } from './Styles';
import { ToDoList } from './toDoList';
import { selectTodos, fetchToDos } from './toDoSlice';

Amplify.configure(awsExports);
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchToDos());
  }, []);

  const todos: Todo[] = useAppSelector(selectTodos);
  

  return (
    <Container>
      <TitleContainer>Todo list</TitleContainer>
      <h1>Add A Todo</h1>
      <AddToDoContainer />
      <h1>Your Todos</h1>
      {todos.map((todo: Todo, index: number) => (
        <ToDoList {...todo} key={todo.id ? todo.id : index} />
      ))}
    </Container>
  );
};

export default App;
