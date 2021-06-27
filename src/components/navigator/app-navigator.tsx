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
import ProfileScreen from '../../screens/profile';
import HomeNavigator from './home-navigator';

import { auth } from '../../api/firebase';
import SignInScreen from '../../screens/signin';
import WelcomeScreen from '../../screens/welcome';
import SignUpScreen from '../../screens/signup';
import ForgotPasswordScreen from '../../screens/forgot-password';

/* eslint-enable @typescript-eslint/no-unused-vars */

export type AppNavigatorParamList = {
  Welcome: undefined;
  SignIn?: { email?: string };
  SignUp: undefined;
  Home: undefined;
  ForgotPassword: undefined;
};

const AppStack = createStackNavigator();

const BackIcon: TopNavigationProps['accessoryLeft'] = (props) => (
  <Icon {...props} name="arrow-back" />
);

const BackAction = (): ReactElement => {
  const navigation = useNavigation();
  return (
    <TopNavigationAction onPress={() => navigation.goBack()} icon={BackIcon} />
  );
};

const AppNavigator = (): ReactElement => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  return (
    <>
      <StatusBar style="dark" />
      <AppStack.Navigator
        headerMode="screen"
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        {!currentUser && (
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
        {currentUser && (
          <>
            <AppStack.Screen name="Home" component={HomeNavigator} />
            <AppStack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: true,
                header: () => {
                  return (
                    <TopNavigation title="Profile" accessoryLeft={BackAction} />
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
