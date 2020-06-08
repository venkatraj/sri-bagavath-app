import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import AboutNavigator from './AboutNavigator';
import ShopNavigator from './ShopNavigator';
import EventsNavigator from './EventsNavigator';
import MagazinesNavigator from './MagazinesNavigator';
import EBooksNavigator from './EBooksNavigator';
import ContactNavigator from './ContactNavigator';

const Drawer = createDrawerNavigator();

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          // options={{
          //   drawerIcon: ({ focused, color, size }) => (
          //     <Ionicons name="md-home" />
          //   ),
          // }}
        />
        <Drawer.Screen name="About" component={AboutNavigator} />
        <Drawer.Screen name="Shop" component={ShopNavigator} />
        <Drawer.Screen name="Events" component={EventsNavigator} />
        <Drawer.Screen name="Magazines" component={MagazinesNavigator} />
        <Drawer.Screen name="EBooks" component={EBooksNavigator} />
        <Drawer.Screen name="Contact" component={ContactNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
