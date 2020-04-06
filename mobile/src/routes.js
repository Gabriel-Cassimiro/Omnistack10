import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerTintColor: '#FFF',
        headerStyle:{
          backgroundColor: '#7D40E7',
        }
      }}>
        <stack.Screen
          name="Main"
          component={Main}
          options={{ 
            title:"Mapa Dev",
            headerTitleAlign: 'center'}}
          />
        <stack.Screen
          name="Profile"
          component={Profile}
          options={{ 
            title:"Perfil do Github",
            headerTitleAlign: 'center'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;