import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import ShopScreen from '../../screens/public/ShopScreen';

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
    >
      <Stack.Screen name="shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
