import React from 'react';
import App from './App';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from './styles/Styles';
import { hydrate, render } from 'react-dom';
Amplify.configure(awsExports);

const AppComponents = () => (
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
  hydrate(<AppComponents />, rootElement);
} else {
  render(<AppComponents />, rootElement);
}
