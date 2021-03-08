import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import GlobalStyle, { theme } from './globalStyles';
import { MuiThemeProvider } from '@material-ui/core';

Amplify.configure(awsExports);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
