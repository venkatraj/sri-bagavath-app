import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderDrawer from '../../components/HeaderDrawer';
import ContactScreen from '../../screens/public/ContactScreen';

const Stack = createStackNavigator();

const ContactNavigator = (props) => {
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
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default ContactNavigator;
