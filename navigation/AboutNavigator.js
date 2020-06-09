import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../components/HeaderDrawer';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

const AboutNavigator = (props) => {
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
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default AboutNavigator;
