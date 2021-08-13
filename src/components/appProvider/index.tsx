/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import customTheme from '../../tiboulot-maurice-theme.json';

/* eslint-enable @typescript-eslint/no-unused-vars */

const TiBoulotAppProvider: FC<any> = ({ children }) => {
  return (
    <SafeAreaProvider
      initialSafeAreaInsets={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...customTheme }}>
        {children}
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

export default TiBoulotAppProvider;
