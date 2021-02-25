import API, { graphqlOperation } from '@aws-amplify/api';
import { Box, Button, Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import { deleteTodo } from './graphql/mutations';
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
