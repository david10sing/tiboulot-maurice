/* eslint-disable @typescript-eslint/no-unused-vars */

import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Layout } from '@ui-kitten/components';
import React, { FC } from 'react';
import { auth } from '../../api/firebase';
import { AppNavigatorParamList } from '../../components/navigator/app-navigator';

/* eslint-enable @typescript-eslint/no-unused-vars */

type WelcomeScreenNavigationProp = StackNavigationProp<
  AppNavigatorParamList,
  'Welcome'
>;

type ProfileScreenProps = {
  navigation: WelcomeScreenNavigationProp;
};

const ProfileScreen: FC<ProfileScreenProps> = (props: ProfileScreenProps) => {
  const { navigation } = props;
  const handleSignOut = async (): Promise<void> => {
    await auth.signOut();
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button>Profile</Button>
      <Button onPress={handleSignOut}>Sign Out</Button>
    </Layout>
  );
};

export default ProfileScreen;
