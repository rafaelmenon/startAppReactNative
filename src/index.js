import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import './config/ReactotronConfig';
import {store, persistor} from './store';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#292c37" />
        <ApplicationProvider {...eva} theme={eva.light}>
          <App />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}
