/* eslint-disable @typescript-eslint/no-unused-vars */

import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Tab, TabBar } from '@ui-kitten/components';
import React, { ReactElement } from 'react';

/* eslint-enable @typescript-eslint/no-unused-vars */

const TopTabBar = (props: MaterialTopTabBarProps): ReactElement => {
  const { navigation, state } = props;

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      style={{ height: 50 }}
    >
      {state.routeNames.map((route: string) => {
        return <Tab key={route} title={route} />;
      })}
    </TabBar>
  );
};

export default TopTabBar;
