import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import React, { ReactElement } from 'react';

const Auth = (): ReactElement => (
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
    <AmplifySignOut />
  </AmplifyAuthenticator>
);

export default Auth;
