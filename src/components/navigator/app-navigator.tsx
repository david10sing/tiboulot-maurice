/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  TopNavigationProps,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../../screens/profile';
import HomeNavigator from './home-navigator';

/* eslint-enable @typescript-eslint/no-unused-vars */

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
  return (
    <AppStack.Navigator
      headerMode="screen"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="Home" component={HomeNavigator} />
      <AppStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          header: (props) => {
            return <TopNavigation title="Profile" accessoryLeft={BackAction} />;
          },
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
