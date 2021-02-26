import API, { graphqlOperation } from '@aws-amplify/api';
import { Box, Button, Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import React, { ReactElement } from 'react';
import { deleteTodo } from './graphql/mutations';
import { useAppDispatch } from './redux/store';
import { removeToDo } from './redux/toDo/toDoSlice';
interface Props {
  id?: string;
  index: number;
}

export const RemoveToDo = ({ id, index }: Props): ReactElement => {
  const dispatch = useAppDispatch();

  const removeItem = async () => {
    try {
      await API.graphql(graphqlOperation(deleteTodo, { input: { id } }));
      dispatch(removeToDo(index));
    } catch (error) {
      alert('Error removing todo');
    }
  };
  return (
    <Grid container justify="center">
      <Box width={150} p={1}>
        <Button
          fullWidth={true}
          variant="contained"
          color="primary"
          onClick={removeItem}
          endIcon={<CheckIcon />}
        >
          Complete
        </Button>
      </Box>
    </Grid>
  );
};
