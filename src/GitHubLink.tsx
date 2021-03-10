import { Box, Button } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import React, { ReactElement } from 'react';

export const GitHubLink = (): ReactElement => (
  <Box m={2}>
    <Button
      color="primary"
      variant="contained"
      endIcon={<GitHub />}
      onClick={() =>
        window.open('https://github.com/AndyW22/todolist-app', '_blank')
      }
    >
      View on GitHub
    </Button>
  </Box>
);
