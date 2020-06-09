import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../components/HeaderDrawer';
import AdminScreen from '../screens/admin/AdminScreen';
import ShopAdminScreen from '../screens/admin/ShopScreen';
import EventsAdminScreen from '../screens/admin/EventsScreen';
import MagazinesAdminScreen from '../screens/admin/MagazinesScreen';
import EBooksAdminScreen from '../screens/admin/EBooksScreen';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
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
      <Stack.Screen name="HomeAdmin" component={AdminScreen} />
      <Stack.Screen name="ShopAdmin" component={ShopAdminScreen} />
      <Stack.Screen name="EventsAdmin" component={EventsAdminScreen} />
      <Stack.Screen name="MagazinesAdmin" component={MagazinesAdminScreen} />
      <Stack.Screen name="EbooksAdmin" component={EBooksAdminScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
