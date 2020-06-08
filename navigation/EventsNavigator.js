import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import EventsScreen from '../screens/EventsScreen';

const Stack = createStackNavigator();

const EventsNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator
      screenOptions={() => {
        const handleOnPress = () => navigation.toggleDrawer();
        return {
          header: () => <Header onPress={handleOnPress} />,
        };
      }}
    >
      <Stack.Screen name="events" component={EventsScreen} />
    </Stack.Navigator>
  );
};

export default EventsNavigator;
