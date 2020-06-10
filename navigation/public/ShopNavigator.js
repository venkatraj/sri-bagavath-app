import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import HeaderBack from '../../components/HeaderBack';
import ShopScreen from '../../screens/public/ShopScreen';
import ProductDetailsScreen from '../../screens/public/ProductDetailsScreen';

const Stack = createStackNavigator();

const ShopNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          header: (props) => <HeaderBack {...props} />,
          title: 'Product Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
