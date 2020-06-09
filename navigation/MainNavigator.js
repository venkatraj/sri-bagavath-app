import React from 'react';
import { View, SafeAreaView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';

import HomeNavigator from './public/HomeNavigator';
import AboutNavigator from './public/AboutNavigator';
import ShopNavigator from './public/ShopNavigator';
import EventsNavigator from './public/EventsNavigator';
import MagazinesNavigator from './public/MagazinesNavigator';
import EBooksNavigator from './public/EBooksNavigator';
import ContactNavigator from './public/ContactNavigator';
import AdminNavigator from './admin/AdminNavigator';

const Drawer = createDrawerNavigator();

const MainNavigator = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="About" component={AboutNavigator} />
      <Drawer.Screen name="Shop" component={ShopNavigator} />
      <Drawer.Screen name="Events" component={EventsNavigator} />
      <Drawer.Screen name="Magazines" component={MagazinesNavigator} />
      <Drawer.Screen name="EBooks" component={EBooksNavigator} />
      <Drawer.Screen name="Contact" component={ContactNavigator} />
      <Drawer.Screen name="Admin" component={AdminNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
