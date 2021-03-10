import React, { ReactElement, Suspense, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store';
import {
  onAuthUIStateChange,
  AuthState,
  CognitoUserInterface,
} from '@aws-amplify/ui-components';
import { selectCurrentUser, signIn, signOut } from './redux/user/userSlice';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import {  Spinner } from './Styles';
const ToDoListWrapper = React.lazy(() => import('./todo/ToDoListWrapper'));

const AuthWrapper = (): ReactElement => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData): void => {
      if (nextAuthState === AuthState.SignedIn) {
        dispatch(signIn((authData as CognitoUserInterface).attributes));
      } else if (nextAuthState === AuthState.SignedOut) {
        dispatch(signOut());
      }
    });
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
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
        {currentUser && <ToDoListWrapper />}
      </AmplifyAuthenticator>
    </Suspense>
  );
};

export default AuthWrapper;
