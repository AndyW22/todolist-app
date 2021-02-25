import Amplify from 'aws-amplify';
import React from 'react';
import AddToDoContainer from './AddToDoContainer';
import awsExports from './aws-exports';
import { Container, TitleContainer } from './Styles';
import { ToDoList } from './toDoList';

Amplify.configure(awsExports);
const App: React.FC = () => {
  
  return (
    <Container>
      <TitleContainer>Todo list</TitleContainer>
      <AddToDoContainer />
      <ToDoList />
    </Container>
  );
};

export default App;
