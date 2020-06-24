import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from '../../screens/admin/AuthScreen';
import HeaderDrawer from '../../components/HeaderDrawer';

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
