import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import MagazinesScreen from '../../screens/public/MagazinesScreen';
import MagazineFormScreen from '../../screens/admin/MagazineFormScreen';

const Stack = createStackNavigator();

const MagazinesNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="MagazinesScreen"
        component={MagazinesScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Magazines',
        }}
      />
      <Stack.Screen
        name="MagazineForm"
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
