import * as React from 'react';
import { StatusBar} from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
    <Routes/>
    </>
  );
}

/* jeito padrão sem usar rotas
import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/pages/Main';
import Profile from './src/pages/Profile';

//import Routes from './src/routes';
const stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen
      name="Main"
      component={Main}
      />
    </stack.Navigator>
    </NavigationContainer>
  );
} */