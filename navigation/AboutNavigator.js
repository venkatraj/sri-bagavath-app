import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

const AboutNavigator = (props) => {
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
      <Stack.Screen name="about" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default AboutNavigator;
