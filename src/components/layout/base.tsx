/* eslint-disable @typescript-eslint/no-unused-vars */

import { Layout, useTheme } from '@ui-kitten/components';
import React, { FC } from 'react';
import { Keyboard, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import BaseStyles from '../../styles/base';

/* eslint-enable @typescript-eslint/no-unused-vars */

const { layout } = BaseStyles;

type BaseLayoutProps = {
  style?: {
    root?: ViewStyle;
    col?: ViewStyle;
  };
};

const BaseLayout: FC<BaseLayoutProps> = (props) => {
  const { children, style } = props;
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Layout
        style={[
          layout,
          { backgroundColor: theme['background-basic-color-2'] },
          style?.root,
        ]}
      >
        <Grid>
          <Col
            style={[
              {
                alignItems: 'center',
                justifyContent: 'center',
              },
              style?.col,
            ]}
          >
            {children}
          </Col>
        </Grid>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

export default BaseLayout;
