import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import MagazinesScreen from '../screens/MagazinesScreen';

const Stack = createStackNavigator();

const MagazinesNavigator = (props) => {
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
      <Stack.Screen name="Magazines" component={MagazinesScreen} />
    </Stack.Navigator>
  );
};

export default MagazinesNavigator;
