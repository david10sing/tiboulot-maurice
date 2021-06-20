/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import AppNavigator from './src/components/navigator/app-navigator';
import TiBoulotAppProvider from './src/components/appProvider';

/* eslint-enable @typescript-eslint/no-unused-vars */

const App = (): ReactElement => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
  return (
    <TiBoulotAppProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TiBoulotAppProvider>
  );
};

export default App;
