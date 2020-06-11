import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, FAB } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import EventItem from '../../components/EventItem';
import { deleteEvent } from '../../store/actions/events';

const EventsAdminScreen = (props) => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const renderEvent = (itemData) => {
    const { id } = itemData.item;

    return (
      <View>
        <EventItem eventData={itemData.item} />
        <Card>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={() => dispatch(deleteEvent(id))}>Delete</Button>
            <Button onPress={() => {}}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={events} renderItem={renderEvent} />
      <FAB
        style={defaultStyles.fab}
        medium
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EventsAdminScreen;
