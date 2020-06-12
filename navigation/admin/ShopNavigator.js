import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import ShopAdminScreen from '../../screens/admin/ShopScreen';
import ProductScreen from '../../screens/admin/ProductScreen';

const Stack = createStackNavigator();

const ShopNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ShopAdminScreen" component={ShopAdminScreen} />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Product Form',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
