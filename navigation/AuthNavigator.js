import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './MainNavigator';
import AuthScreen from '../screens/admin/AuthScreen';
import Header from '../components/Header';

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  let isLoggedIn = false;
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            header: () => <Header />,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
