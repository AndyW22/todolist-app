import { AmplifySignOut } from '@aws-amplify/ui-react';
import React from 'react';
import { HeaderContainer } from './Styles';

const Header: React.FC = () => (
  <HeaderContainer>
    Todo list
    <AmplifySignOut />
  </HeaderContainer>
);

export default Header;
