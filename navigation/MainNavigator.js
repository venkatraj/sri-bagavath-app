import React from 'react';
import { View, SafeAreaView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';

import HomeNavigator from './public/HomeNavigator';
import AdminNavigator from './admin/AdminNavigator';

const Drawer = createDrawerNavigator();

const MainNavigator = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Admin" component={AdminNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
