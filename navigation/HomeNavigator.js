import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../components/HeaderDrawer';
import HeaderBack from '../components/HeaderBack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ShopScreen from '../screens/ShopScreen';
import EventsScreen from '../screens/EventsScreen';
import MagazinesScreen from '../screens/MagazinesScreen';
import EBooksScreen from '../screens/EBooksScreen';
import ContactScreen from '../screens/ContactScreen';

const HomeStack = createStackNavigator();

const HomeNavigator = (props) => {
  const { navigation } = props;
  return (
    <HomeStack.Navigator
      screenOptions={() => {
        const handleOnPress = () => navigation.toggleDrawer();
        return {
          header: () => <HeaderDrawer onPress={handleOnPress} />,
        };
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Magazines"
        component={MagazinesScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="EBooks"
        component={EBooksScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
