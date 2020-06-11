import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import EventItem from '../../components/EventItem';

const EventsScreen = (props) => {
  const { navigation } = props;
  const events = useSelector((state) => state.events);

  const onPress = (id) => {
    navigation.push('Events', {
      screen: 'EventDetails',
      params: { id },
    });
  };

  const renderEvent = (itemData) => {
    return <EventItem eventData={itemData.item} onPress={onPress} />;
  };

  return <FlatList data={events} renderItem={renderEvent} />;
};

const styles = StyleSheet.create({});

export default EventsScreen;
