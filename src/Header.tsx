import React, { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { selectCurrentUser, signOutAction } from './redux/user/userSlice';
import {
  HeaderContainer,
  OptionsContainer,
  Text,
  Toggler,
} from './styles/Styles';
import { Box, Button } from '@material-ui/core';
import { selectTheme, toggleDarkMode } from './redux/theme/themeSlice';
import { GitHub } from '@material-ui/icons';

const Header = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      ToDo List
      <OptionsContainer>
        {currentUser ? (
          <>
            <Text>
              Signed in as <strong>{currentUser.email}</strong>
            </Text>
          </>
        ) : (
          <Text>Not currently signed in</Text>
        )}
        <Toggler
          onChange={() => dispatch(toggleDarkMode())}
          checked={theme}
          size={60}
        />
        <Box mr={2} display="flex" alignItems="center">
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
        {currentUser && (
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ExitToAppIcon />}
            onClick={() => dispatch(signOutAction())}
          >
            Sign Out
          </Button>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
