import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderBack from '../../components/HeaderBack';
import MagazinesAdminScreen from '../../screens/admin/MagazinesScreen';
import MagazineFormScreen from '../../screens/admin/MagazineFormScreen';

const Stack = createStackNavigator();

const MagazinesNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="MagazineAdminScreen"
        component={MagazinesAdminScreen}
      />
      <Stack.Screen
        name="Magazine"
        component={MagazineFormScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Magazine Form',
        }}
      />
    </Stack.Navigator>
  );
};

export default MagazinesNavigator;
