import React, { ReactElement } from 'react';
import { useAppSelector } from './redux/store';
import { selectCurrentUser } from './redux/user/userSlice';
import { HeaderContainer, OptionsContainer, SignOut, Text } from './Styles';

const Header = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <HeaderContainer>
      ToDo List
      <OptionsContainer>
        {currentUser ? (
          <>
            <Text>
              Signed in as <strong>{currentUser.email}</strong>
            </Text>
            <SignOut />
          </>
        ) : (
          <Text>Not currently signed in</Text>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
