import { AmplifySignOut } from '@aws-amplify/ui-react';
import React, { ReactElement } from 'react';
import { HeaderContainer } from './Styles';

const Header = (): ReactElement => (
  <HeaderContainer>
    Todo list
    <AmplifySignOut />
  </HeaderContainer>
);

export default Header;
