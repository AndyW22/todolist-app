import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
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
      </AmplifyAuthenticator>
      <TitleContainer>Todo list</TitleContainer>
      <AddToDoForm />
      <ToDoList />
      <AmplifySignOut />
    </Container>
  );
};

export default App;
