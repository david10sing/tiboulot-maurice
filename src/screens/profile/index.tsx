/* eslint-disable @typescript-eslint/no-unused-vars */

import { StackNavigationProp } from '@react-navigation/stack';
import {
  Avatar,
  Button,
  Icon,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
import React, { FC, ReactElement } from 'react';

import { Pressable, ScrollView } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { auth } from '../../api/firebase';
import TiBoulotAvatar from '../../components/avatar';
import BaseHomeLayout from '../../components/layout/base-home';
import { AppNavigatorParamList } from '../../components/navigator/app-navigator';
import { setUser } from '../../redux/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';

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
  const theme = useTheme();
  const authState = useAppSelector((state) => state.auth);
  const handleSignOut = async (): Promise<void> => {
    await auth.signOut();
  };

  const handleEditProfile = (): void => {
    navigation.navigate('ProfileEdit');
  };

  return (
    <BaseHomeLayout>
      <ScrollView>
        <Grid>
          <Row>
            <TiBoulotAvatar style={{ root: { marginRight: 20 } }} />
            <Layout style={{ flex: 1, backgroundColor: 'transparent' }}>
              <Text style={{ marginBottom: 10 }} category="h4">
                Hi, {authState.user?.displayName || ''}
              </Text>
              <Text style={{ marginBottom: 4 }} category="p1">
                {authState.user?.email || ''}
              </Text>
              <Text style={{ marginBottom: 4 }} category="p1">
                Phone Number
              </Text>
            </Layout>
            <Pressable
              onPress={handleEditProfile}
              style={{ width: 40, height: 40, display: 'flex' }}
            >
              <Icon
                style={{
                  width: 30,
                  height: 30,
                  tintColor: theme['color-primary-default'],
                }}
                name="edit"
              />
            </Pressable>
          </Row>
        </Grid>
        <Button>Profile</Button>
        <Button onPress={handleSignOut}>Sign Out</Button>
      </ScrollView>
    </BaseHomeLayout>
  );
};

export default ProfileScreen;
