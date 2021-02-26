import React, { ReactElement, useEffect } from 'react';
import { Todo } from './API';
import { useAppDispatch, useAppSelector } from './redux/store';
import { selectTodos } from './redux/toDo/toDoSlice';
import { fetchToDos } from './redux/toDo/toDoThunks';
import { RemoveToDo } from './RemoveToDo';
import { ToDoDescription, ToDoListContainer, ToDoName } from './Styles';

export const ToDoList = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, []);
  const todos: Todo[] = useAppSelector(selectTodos);

  return (
    <div>
      <h1>Your Todos</h1>
      {todos.map(({ id, name, description }: Todo, index: number) => (
        <ToDoListContainer key={id ? id : index}>
          <ToDoName>{name}</ToDoName>
          <ToDoDescription>{description}</ToDoDescription>
          <RemoveToDo id={id} index={index} />
        </ToDoListContainer>
      ))}
    </div>
  );
};
