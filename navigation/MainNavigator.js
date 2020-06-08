import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ShopScreen from '../screens/ShopScreen';
import EventsScreen from '../screens/EventsScreen';
import MagazinesScreen from '../screens/MagazinesScreen';
import EBooksScreen from '../screens/EBooksScreen';
import ContactScreen from '../screens/ContactScreen';

const Drawer = createDrawerNavigator();

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="about" component={AboutScreen} />
        <Drawer.Screen name="shop" component={ShopScreen} />
        <Drawer.Screen name="events" component={EventsScreen} />
        <Drawer.Screen name="magazines" component={MagazinesScreen} />
        <Drawer.Screen name="ebooks" component={EBooksScreen} />
        <Drawer.Screen name="contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
