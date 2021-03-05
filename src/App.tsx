import Amplify from 'aws-amplify';
import React, { ReactElement } from 'react';
import { AddToDoForm } from './todo/AddToDoForm';
import awsExports from './aws-exports';
import Header from './Nav';
import { Container } from './Styles';
import { ToDoList } from './todo/ToDoList';
import { Auth } from './Auth';
import { useAppSelector } from './redux/store';
import { selectCurrentUser } from './redux/user/userSlice';
Amplify.configure(awsExports);

export const App = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <>
      <Header />
      <Auth />
      {currentUser && (
        <Container>
          <AddToDoForm />
          <ToDoList />
        </Container>
      )}
    </>
  );
};

export default App;
