import React, { ReactElement } from 'react';
import {
  ToDoName,
  ToDoDescription,
  ToDoListContainer,
  ToDoListButtonContainer,
} from './Styles';

interface Props {
  id: string;
  name: string;
  description?: string;
}

export const ToDoList = ({ name, description }: Props): ReactElement => (
  <ToDoListContainer>
    <ToDoName>{name}</ToDoName>
    <ToDoDescription>{description}</ToDoDescription>
    <ToDoListButtonContainer variant="contained" color="primary">
      Complete
    </ToDoListButtonContainer>
  </ToDoListContainer>
);
