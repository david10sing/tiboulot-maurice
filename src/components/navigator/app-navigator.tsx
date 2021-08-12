/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  TopNavigationProps,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileScreen from '../../screens/profile';
import HomeNavigator from './home-navigator';

import { auth } from '../../api/firebase';
import SignInScreen from '../../screens/signin';
import WelcomeScreen from '../../screens/welcome';
import SignUpScreen from '../../screens/signup';
import ForgotPasswordScreen from '../../screens/forgot-password';
import { AuthState, setUser } from '../../redux/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import ProfileEditScreen from '../../screens/profile-edit';

/* eslint-enable @typescript-eslint/no-unused-vars */

export type AppNavigatorParamList = {
  Welcome: undefined;
  SignIn?: { email?: string };
  SignUp: undefined;
  Home: undefined;
  ForgotPassword: undefined;
  Profile: undefined;
  ProfileEdit: undefined;
};

const AppStack = createStackNavigator();

const BackIcon: TopNavigationProps['accessoryLeft'] = (props) => (
  <Icon {...props} name="arrow-back" />
);

const BackAction = (): ReactElement => {
  const navigation = useNavigation();
  const handleGoBack = (): void => {
    navigation.goBack();
  };
  return (
    <TopNavigationAction
      style={{ paddingRight: 10 }}
      onPress={handleGoBack}
      icon={BackIcon}
    />
  );
};

const AppNavigator = (): ReactElement => {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    auth.onAuthStateChanged((userCredentials) => {
      if (userCredentials) {
        dispatch(
          setUser({
            displayName: userCredentials?.displayName,
            email: userCredentials.email,
            emailVerified: userCredentials.emailVerified,
            phoneNumber: userCredentials.phoneNumber,
            photoURL: userCredentials.photoURL,
          })
        );
        return;
      }

      dispatch(setUser(null));
    });
  }, [dispatch]);

  return (
    <>
      <StatusBar style="dark" />
      <AppStack.Navigator
        headerMode="screen"
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        {!authState.user && (
          <>
            <AppStack.Screen name="Welcome" component={WelcomeScreen} />
            <AppStack.Screen name="SignIn" component={SignInScreen} />
            <AppStack.Screen name="SignUp" component={SignUpScreen} />
            <AppStack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </>
        )}
        {authState.user && (
          <>
            <AppStack.Screen name="Home" component={HomeNavigator} />
            <AppStack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: true,
                header: () => {
                  return (
                    <TopNavigation
                      style={{
                        paddingTop: top,
                        height: 50 + top,
                      }}
                      title="Profile"
                      accessoryLeft={BackAction}
                    />
                  );
                },
              }}
            />
            <AppStack.Screen
              name="ProfileEdit"
              component={ProfileEditScreen}
              options={{
                headerShown: true,
                header: () => {
                  return (
                    <TopNavigation
                      style={{
                        paddingTop: top,
                        height: 50 + top,
                      }}
                      title="Edit Profile"
                      accessoryLeft={BackAction}
                    />
                  );
                },
              }}
            />
          </>
        )}
      </AppStack.Navigator>
    </>
  );
};

export default AppNavigator;
