import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import AdminScreen from '../../screens/admin/AdminScreen';
import ShopNavigator from './ShopNavigator';
import EventsNavigator from './EventsNavigator';
import MagazinesNavigator from './MagazinesNavigator';
import EBooksAdminScreen from '../../screens/admin/EBooksScreen';

const Stack = createStackNavigator();

const AdminNavigator = (props) => {
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
      <Stack.Screen name="AdminScreen" component={AdminScreen} />
      <Stack.Screen
        name="ShopAdmin"
        component={ShopNavigator}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <Stack.Screen
        name="EventsAdmin"
        component={EventsNavigator}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <Stack.Screen
        name="MagazinesAdmin"
        component={MagazinesNavigator}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <Stack.Screen
        name="EBooksAdmin"
        component={EBooksAdminScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
