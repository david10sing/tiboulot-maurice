/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import AppNavigator from './src/components/navigator/app-navigator';
import TiBoulotAppProvider from './src/components/appProvider';
import store from './src/redux/root-store';

/* eslint-enable @typescript-eslint/no-unused-vars */

const persistor = persistStore(store);

const App = (): ReactElement => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TiBoulotAppProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </TiBoulotAppProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
