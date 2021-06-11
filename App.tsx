import React, { ReactElement } from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Button,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import customTheme from './src/tiboulot-maurice-theme.json';

export default function App(): ReactElement {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...customTheme }}>
        <Layout
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Button>HOME</Button>
        </Layout>
      </ApplicationProvider>
    </>
  );
}
