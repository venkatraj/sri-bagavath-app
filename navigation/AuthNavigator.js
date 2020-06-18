import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './MainNavigator';
import AuthScreen from '../screens/admin/AuthScreen';

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  let isLoggedIn = true;
  return (
    <Stack.Navigator headerMode="none">
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Main" component={MainNavigator} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
