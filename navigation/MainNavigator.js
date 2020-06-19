import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';

import HomeNavigator from './public/HomeNavigator';
import AdminNavigator from './admin/AdminNavigator';
import AuthNavigator from './admin/AuthNavigator';
import { firebase } from '../firebase/firebase';
import { logout } from '../store/actions/auth';

const Drawer = createDrawerNavigator();

const MainNavigator = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(logout());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [firebase]);

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
      {isLoggedIn ? (
        <Drawer.Screen name="Admin" component={AdminNavigator} />
      ) : (
        <Drawer.Screen name="Login" component={AuthNavigator} />
      )}
    </Drawer.Navigator>
  );
};

export default MainNavigator;
