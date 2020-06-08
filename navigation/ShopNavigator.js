import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import ShopScreen from '../screens/ShopScreen';

const Stack = createStackNavigator();

const ShopNavigator = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator
      screenOptions={() => {
        const handleOnPress = () => navigation.toggleDrawer();
        return {
          header: () => <Header onPress={handleOnPress} />,
        };
      }}
    >
      <Stack.Screen name="shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
