import React, { ReactElement, useEffect } from 'react';
import { useAppDispatch } from './redux/store';
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';
import { signIn, signOut } from './redux/user/userSlice';
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { ToDoListWrapper } from './todo/ToDoListWrapper';

const AuthWrapper = (): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData: any) => {
      if (nextAuthState === AuthState.SignedIn) {
        dispatch(signIn(authData.attributes));
      } else if (nextAuthState === AuthState.SignedOut) {
        dispatch(signOut());
      }
    });
  }, []);

  return (
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
            label: 'Password',
            placeholder: 'Password',
            required: true,
          },
        ]}
      />
      <ToDoListWrapper />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
    </AmplifyAuthenticator>
  );
};

export default AuthWrapper;
