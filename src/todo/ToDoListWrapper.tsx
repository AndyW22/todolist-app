import { Container } from '../styles/Styles';
import React, { ReactElement } from 'react';
import AddToDoForm from './AddToDoForm';
import { ToDoList } from './ToDoList';

const ToDoListWrapper = (): ReactElement => (
  <Container>
    <AddToDoForm />
    <ToDoList />
  </Container>
);

export default ToDoListWrapper;
 