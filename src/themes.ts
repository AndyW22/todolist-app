import { createMuiTheme } from '@material-ui/core';
import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    background: string;
    containerbackground: string;
  }
}


export const lightTheme: DefaultTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#363537',
  containerbackground: '#DFDEDE',
};

export const darkTheme: DefaultTheme = {
  body: '#212121',
  text: '#FAFAFA',
  background: '#303030',
  containerbackground: '#424242',
};

export const materialUI = createMuiTheme({
  palette: {
    primary: {
      main: '#2483fa',
    },
  },
});
