import Amplify from 'aws-amplify';
import React, { lazy, ReactElement, Suspense } from 'react';
import awsExports from './aws-exports';
import { Spinner } from './Styles';
import Header from './Nav';
const AuthWrapper = lazy(() => import('./AuthWrapper'));
Amplify.configure(awsExports);

export const App = (): ReactElement => (
  <Suspense fallback={<Spinner />}>
    <Header />
    <AuthWrapper />
  </Suspense>
);

export default App;
