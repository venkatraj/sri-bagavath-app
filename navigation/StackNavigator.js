import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ShopScreen from '../screens/ShopScreen';
import EventsScreen from '../screens/EventsScreen';
import MagazinesScreen from '../screens/MagazinesScreen';
import EBooksScreen from '../screens/EBooksScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createStackNavigator();

const StackNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={(props) => {
        const { navigation } = props;
        const handleOnPress = () => navigation.toggleDrawer();
        return {
          header: () => <Header onPress={handleOnPress} />,
        };
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="about" component={AboutScreen} />
      <Stack.Screen name="shop" component={ShopScreen} />
      <Stack.Screen name="events" component={EventsScreen} />
      <Stack.Screen name="magazines" component={MagazinesScreen} />
      <Stack.Screen name="ebooks" component={EBooksScreen} />
      <Stack.Screen name="contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
