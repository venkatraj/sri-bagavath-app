import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import EBooksAdminScreen from '../../screens/admin/EBooksScreen';
import EBookFormScreen from '../../screens/admin/EBookFormScreen';

const Stack = createStackNavigator();

const EBooksNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="EBooksAdminScreen" component={EBooksAdminScreen} />
      <Stack.Screen
        name="EBook"
        component={EBookFormScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          headerTitle: 'EBook Form',
        }}
      />
    </Stack.Navigator>
  );
};

export default EBooksNavigator;
