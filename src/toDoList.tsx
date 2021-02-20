import React, { ReactElement } from 'react';
import { RemoveToDo } from './RemoveToDo';
import { ToDoName, ToDoDescription, ToDoListContainer } from './Styles';

interface Props {
  id: string;
  name: string;
  description?: string;
}

export const ToDoList = (toDo: Props): ReactElement => (
  <ToDoListContainer>
    <ToDoName>{toDo.name}</ToDoName>
    <ToDoDescription>{toDo.description}</ToDoDescription>
    <RemoveToDo id={toDo.id} />
  </ToDoListContainer>
);
