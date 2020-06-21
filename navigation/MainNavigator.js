import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';

import HomeNavigator from './public/HomeNavigator';
import AdminNavigator from './admin/AdminNavigator';
import AuthNavigator from './admin/AuthNavigator';
import { firebase } from '../firebase/firebase';
import { logout } from '../store/actions/auth';

const Drawer = createDrawerNavigator();

const MainNavigator = (props) => {
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(logout());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItemList {...props} />
              {isLoggedIn && (
                <DrawerItem label="Logout" onPress={handleLogout} />
              )}
            </SafeAreaView>
          </View>
        );
      }}
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
      {!isLoggedIn && <Drawer.Screen name="Login" component={AuthNavigator} />}
    </Drawer.Navigator>
  );
};

export default MainNavigator;
