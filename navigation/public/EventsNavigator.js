import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EventsScreen from '../../screens/public/EventsScreen';
import EventDetailsScreen from '../../screens/public/EventDetailsScreen';

const Stack = createStackNavigator();

const EventsNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="EventsScreen" component={EventsScreen} />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Event Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default EventsNavigator;
