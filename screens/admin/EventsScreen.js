import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, FAB, Snackbar, HelperText } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import EventItem from '../../components/EventItem';
import { deleteEvent } from '../../store/actions/events';

const EventsAdminScreen = (props) => {
  const { navigation } = props;
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);

  const onPress = (id = null) => {
    navigation.push('EventsAdmin', {
      screen: 'Event',
      params: { id },
    });
  };

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
            <Button onPress={() => onPress(id)}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View style={defaultStyles.occupy}>
      {events.length === 0 ? (
        <View>
          <HelperText>No events found. Add some</HelperText>
        </View>
      ) : (
        <View>
          <FlatList data={events} renderItem={renderEvent} />

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
      )}
      <FAB
        style={defaultStyles.fab}
        medium
        icon="plus"
        onPress={() => onPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EventsAdminScreen;
