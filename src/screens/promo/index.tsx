/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Layout } from '@ui-kitten/components';
import React, { FC } from 'react';

/* eslint-enable @typescript-eslint/no-unused-vars */

type PromoScreenProps = null;

const PromoScreen: FC<PromoScreenProps> = (props: PromoScreenProps) => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button>PROMO</Button>
    </Layout>
  );
};

export default PromoScreen;
