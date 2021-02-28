import React, { ReactElement } from 'react';
import { Todo } from '../API';
import { RemoveToDo } from './RemoveToDo';
import { ToDoDescription, ToDoListContainer, ToDoName } from '../Styles';

interface ToDoItemProps {
  todo: Todo;
  key: number;
}

export const ToDoItem = ({
  todo: { id, name, description },
  key,
}: ToDoItemProps): ReactElement => (
  <ToDoListContainer key={id ? id : key}>
    <ToDoName>{name}</ToDoName>
    <ToDoDescription>{description}</ToDoDescription>
    <RemoveToDo id={id} index={key} />
  </ToDoListContainer>
);

export default ToDoItem;
