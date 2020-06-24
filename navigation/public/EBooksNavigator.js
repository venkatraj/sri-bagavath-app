import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderBack from '../../components/HeaderBack';
import EBooksScreen from '../../screens/public/EBooksScreen';
import EBookFormScreen from '../../screens/admin/EBookFormScreen';

const Stack = createStackNavigator();

const EBooksNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="EBooksScreen"
        component={EBooksScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'E-Books',
        }}
      />
      <Stack.Screen
        name="EBookForm"
        component={EBookFormScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'EBook Form',
        }}
      />
    </Stack.Navigator>
  );
};

export default EBooksNavigator;
