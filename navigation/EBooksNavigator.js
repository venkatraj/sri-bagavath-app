import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import EBooksScreen from '../screens/EBooksScreen';

const Stack = createStackNavigator();

const EBooksNavigator = (props) => {
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
      <Stack.Screen name="EBooks" component={EBooksScreen} />
    </Stack.Navigator>
  );
};

export default EBooksNavigator;
