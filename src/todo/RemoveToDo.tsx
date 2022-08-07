import { Box, Button, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { ReactElement } from 'react';
import { useAppDispatch } from '../redux/store';
import { removeToDo } from '../redux/toDo/toDoThunks';

export interface RemoveToDoProps {
  id?: string;
  index: number;
}

export const RemoveToDo = ({ id, index }: RemoveToDoProps): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <Grid container justify="flex-end">
      <Box width={'auto'} p={1}>
        <Button
          fullWidth={true}
          variant="outlined"
          color="primary"
          onClick={() => {
            dispatch(removeToDo({ id, index }));
          }}
          endIcon={<DeleteIcon />}
        >
          Delete
        </Button>

      </Box>
    </Grid>
  );
};
