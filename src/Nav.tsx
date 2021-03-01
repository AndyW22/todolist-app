import { AmplifySignOut } from '@aws-amplify/ui-react';
import React, { ReactElement } from 'react';
import { HeaderContainer, OptionsContainer } from './Styles';
const Header = (): ReactElement => (
  <HeaderContainer>
    Todo list
    <OptionsContainer>
      <AmplifySignOut />
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
