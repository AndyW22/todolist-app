import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import GlobalStyle from './Styles';

Amplify.configure(awsExports);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
