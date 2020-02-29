import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Main"
          component={Main}
        />
        <stack.Screen
          name="Profile"
          component={Profile}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;