import React, { ReactElement, Suspense, useEffect } from 'react';
import { Todo } from '../API';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { selectTodos } from '../redux/toDo/toDoSlice';
import { fetchToDos } from '../redux/toDo/toDoThunks';
import { Spinner } from '../Styles';
import { ToDoItem } from './ToDoItem';

const ToDoList = (): ReactElement => {
  const dispatch = useAppDispatch();
  const todos: Todo[] = useAppSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchToDos());
  }, []);

  return (
    <>
      <h1>Your Todos</h1>
      <Suspense fallback={<Spinner />}>
        {todos.map((todo: Todo, index: number) => (
          <ToDoItem key={index} index={index} todo={todo} />
        ))}
      </Suspense>
    </>
  );
};

export default ToDoList;
