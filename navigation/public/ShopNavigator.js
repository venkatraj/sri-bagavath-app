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
    <Stack.Navigator
      screenOptions={() => {
        const handleOnPress = () => navigation.toggleDrawer();
        return {
          header: () => <HeaderDrawer onPress={handleOnPress} />,
        };
      }}
      initialRouteName="ShopScreen"
    >
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen
        name="ProductDetailsScreen"
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
