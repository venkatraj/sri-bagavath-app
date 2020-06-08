import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const TouchableCard = (props) => {
  const { title, screen, onPress } = props;
  // console.log(onPress);
  return (
    <TouchableOpacity style={styles.gridItem} onPress={() => onPress(title)}>
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
    elevation: 3,
    padding: 15,
    backgroundColor: 'orange',
  },
});

export default TouchableCard;
