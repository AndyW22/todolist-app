import Amplify from 'aws-amplify';
import React, { lazy, ReactElement, Suspense } from 'react';
import awsExports from './aws-exports';
import { GitHubLink } from './GitHubLink';
import Header from './Header';
import { Spinner } from './Styles';
import { ThemeWrapper } from './ThemeWrapper';
const ToDoListWrapper = React.lazy(() => import('./todo/ToDoListWrapper'));
const AuthWrapper = lazy(() => import('./AuthWrapper'));

Amplify.configure(awsExports);

export const App = (): ReactElement => {

  return (
    <Suspense fallback={<Spinner />}>
      <ThemeWrapper>
        <Header />
        <GitHubLink />
        <AuthWrapper>
          <ToDoListWrapper />
        </AuthWrapper>
      </ThemeWrapper>
    </Suspense>
  );
};

export default App;
