import React, { useState } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { AppLoading } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './navigation/AppNavigator';
import configureStore from './store/configureStore';
import fetchFonts from './utils/fetchFonts';
// import populateData from './data/populate';
// import { database } from './firebase/firebase';

console.ignoredYellowBox = ['Setting a timer'];

const store = configureStore();
// populateData(store);
// const subscribe = store.subscribe(() => {
//   console.log(store.getState().magazines);
//   console.log('App');
// });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}
