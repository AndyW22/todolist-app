import Amplify from 'aws-amplify';
import React, { lazy, ReactElement, Suspense } from 'react';
import awsExports from './aws-exports';
import { Container, Spinner } from './Styles';
import Header from './Nav';
import { useAppSelector } from './redux/store';
import { selectCurrentUser } from './redux/user/userSlice';
const Auth = lazy(() => import('./Auth'));
const AddToDoForm = lazy(() => import('./todo/AddToDoForm'));
const ToDoList = lazy(() => import('./todo/ToDoList'));

Amplify.configure(awsExports);

export const App = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Auth />
      {currentUser && (
        <Container>
          <AddToDoForm />
          <ToDoList />
        </Container>
      )}
    </Suspense>
  );
};

export default App;
