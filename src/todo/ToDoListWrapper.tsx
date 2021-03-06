import { Container } from '../Styles';
import React, { lazy, ReactElement, Suspense } from 'react';
import { Spinner } from '../Styles';
const AddToDoForm = lazy(() => import('./AddToDoForm'));
const ToDoList = lazy(() => import('./ToDoList'));

export const ToDoListWrapper = (): ReactElement => (
  <Suspense fallback={<Spinner />}>
    <Container>
      <AddToDoForm />
      <ToDoList />
    </Container>
  </Suspense>
);
