import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, FAB, Snackbar } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import EventItem from '../../components/EventItem';
import { deleteEvent } from '../../store/actions/events';

const EventsAdminScreen = (props) => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);

  const renderEvent = (itemData) => {
    const { id } = itemData.item;

    const onDelete = () => {
      dispatch(deleteEvent(id));
      setVisibility(true);
    };

    return (
      <View>
        <EventItem eventData={itemData.item} />
        <Card>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={onDelete}>Delete</Button>
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
      <Snackbar
        visible={visibility}
        onDismiss={() => setVisibility(false)}
        action={{
          label: 'Okay',
          duration: 3000,
          onPress: () => {
            // Do something
          },
        }}
      >
        Event deleted!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EventsAdminScreen;
