import API, { graphqlOperation } from '@aws-amplify/api';
import { Box, Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { deleteTodo } from './graphql/mutations';
import { ToDoListButtonContainer } from './Styles';
interface Props {
  id?: string;
}

export const RemoveToDo = (id: Props): ReactElement => {
  const removeItem = async () => {
    try {
      await API.graphql(graphqlOperation(deleteTodo, { input: id }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid container justify="center">
      <Box width={200} p={1}>
        <ToDoListButtonContainer
          fullWidth={true}
          variant="contained"
          color="primary"
          onClick={removeItem}
        >
          Complete
        </ToDoListButtonContainer>
      </Box>
    </Grid>
  );
};
