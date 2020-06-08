import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import TouchableCard from '../components/TouchableCard';

const HomeScreen = (props) => {
  const { navigation } = props;
  const onPressHandler = (title) => {
    navigation.navigate(title);
  };
  const screens = [
    {
      id: 'p1',
      title: 'About',
    },
    {
      id: 'p2',
      title: 'Shop',
    },
    {
      id: 'p3',
      title: 'Events',
    },
    {
      id: 'p4',
      title: 'Magazines',
    },
    {
      id: 'p5',
      title: 'EBooks',
    },
    {
      id: 'p6',
      title: 'Contact',
    },
  ];

  const renderCards = (itemData) => {
    const { title, screen } = itemData.item;
    return (
      <TouchableCard title={title} screen={screen} onPress={onPressHandler} />
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={screens}
      renderItem={renderCards}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
