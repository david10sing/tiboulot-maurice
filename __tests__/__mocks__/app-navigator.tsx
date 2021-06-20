/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ComponentType, ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* eslint-enable @typescript-eslint/no-unused-vars */

const Stack = createStackNavigator();

type MockedNavigatorProps = {
  component: ComponentType;
  params?: Record<string, unknown>;
};

const MockedNavigator = ({
  component,
  params = {},
}: MockedNavigatorProps): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
