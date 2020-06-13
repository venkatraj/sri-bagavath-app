import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './navigation/AppNavigator';
import configureStore from './store/configureStore';
import populateData from './data/populate';
import { database } from './firebase/firebase';

const store = configureStore();
// populateData(store);
const subscribe = store.subscribe(() => console.log(store.getState().products));

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
