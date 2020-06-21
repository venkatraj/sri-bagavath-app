import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import AdminNavigator from './AdminNavigator';
import AuthScreen from '../../screens/admin/AuthScreen';
import HeaderDrawer from '../../components/HeaderDrawer';
import Header from '../../components/Header';

const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  const { navigation } = props;
  return (
    <Stack.Navigator
      screenOptions={() => {
        const handleOnPress = () => navigation.toggleDrawer();
        return {
          header: () => <HeaderDrawer onPress={handleOnPress} />,
        };
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
