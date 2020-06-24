import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import ShopScreen from '../../screens/public/ShopScreen';
import ProductDetailsScreen from '../../screens/public/ProductDetailsScreen';
import ProductFormScreen from '../../screens/admin/ProductFormScreen';

const Stack = createStackNavigator();

const ShopNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Product Details',
        }}
      />
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
