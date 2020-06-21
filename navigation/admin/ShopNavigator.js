import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import ShopScreen from '../../screens/public/ShopScreen';
import ProductFormScreen from '../../screens/admin/ProductFormScreen';

const Stack = createStackNavigator();

const ShopNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen
        name="ProductForm"
        component={ProductFormScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Product Form',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
