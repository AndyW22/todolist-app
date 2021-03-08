import React, { ReactElement, useEffect } from 'react';
import { Todo } from '../API';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { selectTodos } from '../redux/toDo/toDoSlice';
import { fetchToDos } from '../redux/toDo/toDoThunks';
import { ToDoItem } from './ToDoItem';

export const ToDoList = (): ReactElement => {
  const dispatch = useAppDispatch();
  const todos: Todo[] = useAppSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchToDos());
  }, []);

  return (
    <>
      <h1>Your Todos</h1>
      {todos.map((todo: Todo, index: number) => (
        <ToDoItem key={index} index={index} todo={todo} />
      ))}
    </>
  );
};

