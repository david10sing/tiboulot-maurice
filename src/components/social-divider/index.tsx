/* eslint-disable @typescript-eslint/no-unused-vars */

import { Divider, Layout, Text } from '@ui-kitten/components';
import React, { ReactElement } from 'react';

import BaseStyles from '../../styles/base';

/* eslint-enable @typescript-eslint/no-unused-vars */

const { textAlignCenter } = BaseStyles;

const SocialDivider = (): ReactElement => {
  return (
    <Layout
      testID="socialDivider"
      style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginBottom: 40,
      }}
    >
      <Divider style={{ flex: 1, backgroundColor: '#CCC' }} />
      <Text
        style={[textAlignCenter, { flex: 1, textTransform: 'lowercase' }]}
        category="c1"
      >
        Or login using
      </Text>
      <Divider style={{ flex: 1, backgroundColor: '#CCC' }} />
    </Layout>
  );
};

export default SocialDivider;
