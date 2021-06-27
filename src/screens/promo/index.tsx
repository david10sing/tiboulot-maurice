/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Layout } from '@ui-kitten/components';
import React, { FC } from 'react';
import BaseHomeLayout from '../../components/layout/base-home';

/* eslint-enable @typescript-eslint/no-unused-vars */

type PromoScreenProps = null;

const PromoScreen: FC<PromoScreenProps> = (props: PromoScreenProps) => {
  return (
    <BaseHomeLayout>
      <Button>PROMO</Button>
    </BaseHomeLayout>
  );
};

export default PromoScreen;
