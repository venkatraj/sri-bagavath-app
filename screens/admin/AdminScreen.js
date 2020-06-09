import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import TouchableCard from '../../components/TouchableCard';

const AdminScreen = (props) => {
  const { navigation } = props;
  const onPressHandler = (title) => {
    navigation.navigate(title);
  };
  const screens = [
    {
      id: 'p1',
      title: 'ShopAdmin',
    },
    {
      id: 'p2',
      title: 'EventsAdmin',
    },
    {
      id: 'p3',
      title: 'MagazinesAdmin',
    },
    {
      id: 'p4',
      title: 'EBooksAdmin',
    },
  ];

  const renderCards = (itemData) => {
    const { title, screen } = itemData.item;
    return <TouchableCard title={title} onPress={onPressHandler} />;
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

export default AdminScreen;
