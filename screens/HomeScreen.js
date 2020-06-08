import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.centered}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
