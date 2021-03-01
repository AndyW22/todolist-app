import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import React, { ReactElement } from 'react';
import { AddToDoForm } from './todo/AddToDoForm';
import awsExports from './aws-exports';
import Header from './Nav';
import { Container } from './Styles';
import { ToDoList } from './todo/ToDoList';
import { useAuth } from './Auth';
import { useAppSelector } from './redux/store';
import { selectCurrentUser } from './redux/user/userSlice';
Amplify.configure(awsExports);

export const App = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);
  useAuth();
  return (
    <>
      <Header />
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: 'email',
              label: 'Email',
              placeholder: 'Email',
              required: true,
            },
            {
              type: 'password',
              label: 'Email',
              placeholder: 'Password',
              required: true,
            },
          ]}
        />
        <AmplifySignIn slot="sign-in" usernameAlias="email" />
        {currentUser && (
          <Container>
            <AddToDoForm />
            <ToDoList />
          </Container>
        )}
      </AmplifyAuthenticator>
    </>
  );
};

export default App;
