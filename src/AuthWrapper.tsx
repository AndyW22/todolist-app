import React, { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store';
import {
  onAuthUIStateChange,
  AuthState,
  CognitoUserInterface,
} from '@aws-amplify/ui-components';
import { selectCurrentUser, signIn } from './redux/user/userSlice';
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';

interface Props {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData): void => {
      if (nextAuthState === AuthState.SignedIn) {
        dispatch(signIn((authData as CognitoUserInterface).attributes));
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
        <AmplifySignIn slot="sign-in" usernameAlias="email" />
        {currentUser && children}
      </AmplifyAuthenticator>
  );
};

export default AuthWrapper;
