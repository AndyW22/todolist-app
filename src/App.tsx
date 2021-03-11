import Amplify from 'aws-amplify';
import React, { lazy, ReactElement, Suspense } from 'react';
import awsExports from './aws-exports';
import Header from './Header';
import { Spinner } from './styles/Styles';
import { ThemeWrapper } from './ThemeWrapper';
const ToDoListWrapper = React.lazy(() => import('./todo/ToDoListWrapper'));
const AuthWrapper = lazy(() => import('./AuthWrapper'));

Amplify.configure(awsExports);

export const App = (): ReactElement => (
  <Suspense fallback={<Spinner />}>
    <ThemeWrapper>
      <Header />
      <AuthWrapper>
        <ToDoListWrapper />
      </AuthWrapper>
    </ThemeWrapper>
  </Suspense>
);

export default App;
