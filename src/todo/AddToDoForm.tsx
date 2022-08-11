/* Add A Todo */

import { Box, Button, Grid } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import React, { ReactElement, useState } from 'react';
import { useAppDispatch } from '../redux/store';
import { Input } from '../styles/Styles';
import { addToDo } from '../redux/toDo/toDoThunks';
import { CreateTodoInput } from '../API';

const AddToDoForm = (): ReactElement => {
  const dispatch = useAppDispatch();
  const initialState = { name: '', description: '' } as CreateTodoInput;
  const [formState, setFormState] = useState(initialState);
  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  function addTodo() {
    if (!formState.name) {
      alert('Todo must have a name');
      return;
    }

    try {
      dispatch(
        addToDo({
          name: formState.name,
          description: formState.description,
        }),
      );
      setFormState(initialState);
    } catch (err) {
      alert('error creating todo');
    }
  }

  return (
    <div>
      <h1>Add A Todo</h1>
      <Grid container justify="center">
        <Input
          onChange={(event) => setInput('name', event.target.value)}
          value={formState.name}
          placeholder="(Type your new todo)"
        />
  {/* 
        <Input
          onChange={(event) => setInput('description', event.target.value)}
          value={formState.description as string}
          placeholder="Description"
        />
  */}
        <Box width={'auto'} p={1} >
          <Button
            fullWidth={false}
            variant="outlined"
            color="primary"
            onClick={addTodo}
            endIcon={<CreateIcon />}
          >
            Create
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default AddToDoForm;
