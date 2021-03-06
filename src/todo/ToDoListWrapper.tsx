import { Container } from '../Styles';
import React, { lazy, ReactElement } from 'react';
const AddToDoForm = lazy(() => import('./AddToDoForm'));
const ToDoList = lazy(() => import('./ToDoList'));

export const ToDoListWrapper = (): ReactElement => (
  <Container>
    <AddToDoForm />
      <ToDoList />
  </Container>
);
