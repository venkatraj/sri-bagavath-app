import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import Header from '../components/Header';
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
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
