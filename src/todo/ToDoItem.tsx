import React, { ReactElement } from 'react';
import { Todo } from '../API';
import { RemoveToDo } from './RemoveToDo';
import { ToDoDescription, ToDoListContainer, ToDoName } from '../styles/Styles';

interface ToDoItemProps {
  todo: Todo;
  index: number;
}

export const ToDoItem = ({
  todo: { id, name, description },
  index,
}: ToDoItemProps): ReactElement => (
  <ToDoListContainer key={id ? id : index}>
    <ToDoName>{name}</ToDoName>
    <ToDoDescription>{description}</ToDoDescription>
    <RemoveToDo id={id} key={index} index={index} />
  </ToDoListContainer>
);
