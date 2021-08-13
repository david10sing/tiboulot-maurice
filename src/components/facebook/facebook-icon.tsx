/* eslint-disable @typescript-eslint/no-unused-vars */

import { ButtonProps, Icon } from '@ui-kitten/components';
import React, { ReactElement } from 'react';

/* eslint-enable @typescript-eslint/no-unused-vars */

const FacebookIcon: ButtonProps['accessoryLeft'] = (props): ReactElement => {
  return <Icon name="facebook" {...props} />;
};

export default FacebookIcon;
