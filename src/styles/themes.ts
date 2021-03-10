import { createMuiTheme } from '@material-ui/core';
import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    background: string;
    containerbackground: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: '#363537',
  background: '#FFF',
  containerbackground: '#DFDEDE',
};

export const darkTheme: DefaultTheme = {
  text: '#FAFAFA',
  background: '#212121',
  containerbackground: '#424242',
};

export const materialUI = createMuiTheme({
  palette: {
    primary: {
      main: '#2483fa',
    },
    secondary: {
      main: '#b23b3b',
    },
  },
});
