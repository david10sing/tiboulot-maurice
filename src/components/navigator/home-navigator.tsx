/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactElement } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Layout } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '../../screens/home';
import PromoScreen from '../../screens/promo';
import ChatScreen from '../../screens/chat';
import TopTabBar from '../tab-bar';

/* eslint-enable @typescript-eslint/no-unused-vars */

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = (): ReactElement => {
  const { top } = useSafeAreaInsets();
  return (
    <Layout style={{ paddingTop: top, flex: 1 }}>
      <Tab.Navigator initialRouteName="Home" tabBar={TopTabBar}>
        <Tab.Screen name="Promo" component={PromoScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </Layout>
  );
};

export default HomeNavigator;
