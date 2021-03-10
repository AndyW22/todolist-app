import React, { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store';
import { Auth } from 'aws-amplify';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { selectCurrentUser, signOut } from './redux/user/userSlice';
import { HeaderContainer, OptionsContainer, Text } from './Styles';
import { Button } from '@material-ui/core';

const Header = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const signOutButton = async () => {
    try {
      await Auth.signOut();
      dispatch(signOut());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HeaderContainer>
      ToDo List
      <OptionsContainer>
        {currentUser ? (
          <>
            <Text>
              Signed in as <strong>{currentUser.email}</strong>
            </Text>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ExitToAppIcon />}
              onClick={signOutButton}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <Text>Not currently signed in</Text>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
