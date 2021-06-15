/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Layout } from '@ui-kitten/components';
import React, { FC } from 'react';

/* eslint-enable @typescript-eslint/no-unused-vars */

type ProfileScreenProps = null;

const ProfileScreen: FC<ProfileScreenProps> = (props: ProfileScreenProps) => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button>Profile</Button>
    </Layout>
  );
};

export default ProfileScreen;
