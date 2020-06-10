import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import HomeScreen from '../../screens/public/HomeScreen';
import AboutScreen from '../../screens/public/AboutScreen';
import ShopScreen from '../../screens/public/ShopScreen';
import EventsScreen from '../../screens/public/EventsScreen';
import MagazinesScreen from '../../screens/public/MagazinesScreen';
import EBooksScreen from '../../screens/public/EBooksScreen';
import ContactScreen from '../../screens/public/ContactScreen';

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
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'About',
        }}
      />
      <HomeStack.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="MagazinesScreen"
        component={MagazinesScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="EBooksScreen"
        component={EBooksScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
      <HomeStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
