import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import EventAdminScreen from '../../screens/admin/EventsScreen';
import EventFormScreen from '../../screens/admin/EventFormScreen';

const Stack = createStackNavigator();

const EventsNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="EventAdminScreen" component={EventAdminScreen} />
      <Stack.Screen
        name="Event"
        component={EventFormScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Product Form',
        }}
      />
    </Stack.Navigator>
  );
};

export default EventsNavigator;
