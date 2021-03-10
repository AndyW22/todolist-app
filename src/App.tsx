import Amplify from 'aws-amplify';
import React, { lazy, ReactElement, Suspense } from 'react';
import awsExports from './aws-exports';
import { GitHubLink } from './GitHubLink';
import Header from './Header';
import { Spinner } from './Styles';
const AuthWrapper = lazy(() => import('./AuthWrapper'));
Amplify.configure(awsExports);

export const App = (): ReactElement => {

  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <GitHubLink />
      <AuthWrapper />
    </Suspense>
  );
};

export default App;
