/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/home';
import PromoScreen from '../../screens/promo';
import ChatScreen from '../../screens/chat';
import TopTabBar from '../tab-bar';

/* eslint-enable @typescript-eslint/no-unused-vars */

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = (): ReactElement => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={TopTabBar}>
      <Tab.Screen name="Promo" component={PromoScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
