import React, { ReactElement, useEffect } from 'react';
import { RemoveToDo } from './RemoveToDo';
import { useAppDispatch, useAppSelector } from './redux/store';
import { fetchToDos, selectTodos } from './toDoSlice';

import { ToDoName, ToDoDescription, ToDoListContainer } from './Styles';
import { Todo } from './API';

export const ToDoList = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, []);
  const todos: Todo[] = useAppSelector(selectTodos);

  return (
    <div>
      <h1>Your Todos</h1>
      {todos.map((todo: Todo, index: number) => (
        <ToDoListContainer key={todo.id ? todo.id : index}>
          <ToDoName>{todo.name}</ToDoName>
          <ToDoDescription>{todo.description}</ToDoDescription>
          <RemoveToDo id={todo.id} />
        </ToDoListContainer>
      ))}
    </div>
  );
};
