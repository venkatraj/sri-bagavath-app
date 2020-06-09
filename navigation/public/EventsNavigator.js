import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import EventsScreen from '../../screens/public/EventsScreen';

const Stack = createStackNavigator();

const EventsNavigator = (props) => {
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
      <Stack.Screen name="events" component={EventsScreen} />
    </Stack.Navigator>
  );
};

export default EventsNavigator;
