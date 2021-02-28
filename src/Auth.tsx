import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import React from 'react';

const Auth: React.FC = () => (
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
    <AmplifySignOut />
  </AmplifyAuthenticator>
);

export default Auth;
