import React, { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  selectCurrentUser,
  signOutAction,
} from './redux/user/userSlice';
import { HeaderContainer, OptionsContainer, Text, Toggler } from './Styles';
import { Button } from '@material-ui/core';
import { selectTheme, toggleDarkMode } from './redux/theme/themeSlice';

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
        {currentUser && (
          <Button
            variant="contained"
            color="primary"
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
