import Amplify from 'aws-amplify';
import React from 'react';
import AddToDoForm from './AddToDoForm';
import awsExports from './aws-exports';
import { Container, TitleContainer } from './Styles';
import { ToDoList } from './toDoList';

Amplify.configure(awsExports);
const App: React.FC = () => {
  
  return (
    <Container>
      <TitleContainer>Todo list</TitleContainer>
      <AddToDoForm />
      <ToDoList />
    </Container>
  );
};

export default App;
