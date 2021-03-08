import { createMuiTheme } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: Roboto;
    font-size: 20px;
    margin: 0;
    --amplify-primary-color: rgba(0, 131, 253, 1);
    --amplify-primary-shade: rgba(0, 131, 253, 1);
    --amplify-primary-tint: rgba(0, 131, 253, 1);
  }

  * {
    box-sizing: border-box;
    }
`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0083fd',
    },
  },
});