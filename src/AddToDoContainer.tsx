import { Box, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useAppDispatch } from './redux/store';
import { Input } from './Styles';
import { addToDoThunk } from './toDoSlice';
import AddIcon from '@material-ui/icons/Add';

const AddToDoContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialState = { name: '', description: '' };
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
      dispatch(addToDoThunk(formState.name, formState.description));
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
          placeholder="Name"
        />
        <Input
          onChange={(event) => setInput('description', event.target.value)}
          value={formState.description}
          placeholder="Description"
        />
        <Box width={300} p={1}>
          <Button
            fullWidth={true}
            variant="contained"
            color="primary"
            onClick={addTodo}
            endIcon={<AddIcon />}
          >
            Create Todo
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default AddToDoContainer;
