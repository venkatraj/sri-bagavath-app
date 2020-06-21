import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import HomeScreen from '../../screens/public/HomeScreen';
import AboutScreen from '../../screens/public/AboutScreen';
import ShopNavigator from './ShopNavigator';
import EventsNavigator from './EventsNavigator';
import MagazinesNavigator from './MagazinesNavigator';
import EBooksNavigator from './EBooksNavigator';
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
        name="About"
        component={AboutScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'About Sri Bagavath Ayya',
        }}
      />
      <HomeStack.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Products',
        }}
      />
      <HomeStack.Screen
        name="Events"
        component={EventsNavigator}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Events',
        }}
      />
      <HomeStack.Screen
        name="Magazines"
        component={MagazinesNavigator}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Magazines',
        }}
      />
      <HomeStack.Screen
        name="EBooks"
        component={EBooksNavigator}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'EBooks',
        }}
      />
      <HomeStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Contact Us',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
