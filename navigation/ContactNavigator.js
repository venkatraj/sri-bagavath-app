import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import ContactScreen from '../screens/ContactScreen';

const Stack = createStackNavigator();

const ContactNavigator = (props) => {
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
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default ContactNavigator;
