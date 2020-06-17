import React from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

import TouchableCard from '../../components/TouchableCard';
import defaultStyles from '../../theme/defaultStyles';

const AdminScreen = (props) => {
  const { navigation } = props;
  const onPressHandler = (screen) => {
    navigation.navigate(screen);
  };
  const screens = [
    {
      id: 'p1',
      title: 'Shop',
      screen: 'ShopAdmin',
    },
    {
      id: 'p2',
      title: 'Events',
      screen: 'EventsAdmin',
    },
    {
      id: 'p3',
      title: 'Magazines',
      screen: 'MagazinesAdmin',
    },
    {
      id: 'p4',
      title: 'EBooks',
      screen: 'EBooksAdmin',
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
      ListHeaderComponent={() => (
        <Title style={defaultStyles.title}>Administration</Title>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AdminScreen;
