import { Box, Button, Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
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
    <Grid container justify="center">
      <Box width={150} p={1}>
        <Button
          fullWidth={true}
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(removeToDo({ id, index }));
          }}
          endIcon={<CheckIcon />}
        >
          Complete
        </Button>
      </Box>
    </Grid>
  );
};
