import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Title, useTheme } from 'react-native-paper';

const TouchableCard = (props) => {
  const { title, screen, onPress } = props;
  return (
    <TouchableOpacity style={styles.gridItem} onPress={() => onPress(screen)}>
      <View>
        <Title>{title}</Title>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    elevation: 5,
    padding: 15,
    backgroundColor: '#f58636',
  },
});

export default TouchableCard;
