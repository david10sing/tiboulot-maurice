/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import customTheme from './src/tiboulot-maurice-theme.json';
import AppNavigator from './src/components/navigator/app-navigator';

/* eslint-enable @typescript-eslint/no-unused-vars */

const App = (): ReactElement => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...customTheme }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaView>
  );
};

export default App;
