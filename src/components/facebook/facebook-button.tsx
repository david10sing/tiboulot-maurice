/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from '@ui-kitten/components';
import React, { ReactElement } from 'react';
import Facebook from '../../api/facebook';
import FacebookIcon from './facebook-icon';

/* eslint-enable @typescript-eslint/no-unused-vars */

const FacebookButton = (): ReactElement => {
  const handleFBSignIn = (): void => {
    Facebook.initializeAsync({}).then((r) => {
      Facebook.logInWithReadPermissionsAsync().then((response) => {
        console.log(response);
      });
    });
  };

  return (
    <Button
      testID="facebookBtn"
      style={{
        backgroundColor: '#4862A3',
        borderColor: '#4862A3',
        width: 40,
        height: 40,
      }}
      accessoryLeft={FacebookIcon}
      size="medium"
      onPress={handleFBSignIn}
    />
  );
};

export default FacebookButton;
