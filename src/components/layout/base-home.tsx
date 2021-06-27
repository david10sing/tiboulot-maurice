/* eslint-disable @typescript-eslint/no-unused-vars */

import { Layout, useTheme } from '@ui-kitten/components';
import React, { FC } from 'react';
import { Keyboard, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import BaseStyles from '../../styles/base';

/* eslint-enable @typescript-eslint/no-unused-vars */

const { layout } = BaseStyles;

type BaseHomeLayoutProps = {
  style?: {
    root?: ViewStyle;
    col?: ViewStyle;
  };
};

const BaseHomeLayout: FC<BaseHomeLayoutProps> = (props) => {
  const { children, style } = props;
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Layout
        style={[
          layout,
          {
            backgroundColor: theme['background-basic-color-2'],
            padding: 20,
            flex: 1,
            position: 'relative',
          },
          style?.root,
        ]}
      >
        {children}
      </Layout>
    </TouchableWithoutFeedback>
  );
};

export default BaseHomeLayout;
