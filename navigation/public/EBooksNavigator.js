import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import EBooksScreen from '../../screens/public/EBooksScreen';
import EBookFormScreen from '../../screens/admin/EBookFormScreen';

const Stack = createStackNavigator();

const EBooksNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="EBooksScreen" component={EBooksScreen} />
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
