import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import EventItem from '../../components/EventItem';

const EventsAdminScreen = (props) => {
  const events = useSelector((state) => state.events);

  const renderEvent = (itemData) => {
    return <EventItem eventData={itemData.item} />;
  };

  return <FlatList data={events} renderItem={renderEvent} />;
};

const styles = StyleSheet.create({});

export default EventsAdminScreen;
