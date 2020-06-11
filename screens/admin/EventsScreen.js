import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { FAB } from 'react-native-paper';

import EventItem from '../../components/EventItem';

const EventsAdminScreen = (props) => {
  const events = useSelector((state) => state.events);

  const renderEvent = (itemData) => {
    return <EventItem eventData={itemData.item} />;
  };

  return (
    <View>
      <FlatList data={events} renderItem={renderEvent} />
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default EventsAdminScreen;
