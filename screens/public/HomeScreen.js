import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import TouchableCard from '../../components/TouchableCard';

const HomeScreen = (props) => {
  const { navigation } = props;
  const onPressHandler = (screen) => {
    navigation.navigate(screen);
  };
  const screens = [
    {
      id: 'p1',
      title: 'About',
      screen: 'AboutScreen',
    },
    {
      id: 'p2',
      title: 'Shop',
      screen: 'ShopScreen',
    },
    {
      id: 'p3',
      title: 'Events',
      screen: 'EventsScreen',
    },
    {
      id: 'p4',
      title: 'Magazines',
      screen: 'MagazinesScreen',
    },
    {
      id: 'p5',
      title: 'EBooks',
      screen: 'EBooksScreen',
    },
    {
      id: 'p6',
      title: 'Contact',
      screen: 'ContactScreen',
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
