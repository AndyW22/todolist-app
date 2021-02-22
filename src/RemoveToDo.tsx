import API, { graphqlOperation } from '@aws-amplify/api';
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
    <ToDoListButtonContainer
      variant="contained"
      color="primary"
      onClick={removeItem}
    >
      Complete
    </ToDoListButtonContainer>
  );
};
