import React, { ReactElement } from 'react';
import { RemoveToDo } from './RemoveToDo';
import { ToDoName, ToDoDescription, ToDoListContainer } from './Styles';
import { Todo } from './API';

export const ToDoList = (toDo: Todo): ReactElement => (
  <ToDoListContainer>
    <ToDoName>{toDo.name}</ToDoName>
    <ToDoDescription>{toDo.description}</ToDoDescription>
    <RemoveToDo id={toDo.id} />
  </ToDoListContainer>
);
