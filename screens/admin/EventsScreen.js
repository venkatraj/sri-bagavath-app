import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  ActivityIndicator,
  Button,
  Card,
  FAB,
  Snackbar,
  HelperText,
} from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import EventItem from '../../components/EventItem';
import { fetchEvents, deleteEvent } from '../../store/actions/events';

const EventsAdminScreen = (props) => {
  const { navigation } = props;
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadEvents = async () => {
      setIsLoading(true);
      await dispatch(fetchEvents());
      setIsLoading(false);
    };
    loadEvents();
  }, [dispatch]);

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
      setSnackbarMsg('deleted!');
    };

    return (
      <View>
        <EventItem eventData={itemData.item} />
        <Card style={defaultStyles.btnContainer}>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={onDelete}>Delete</Button>
            <Button onPress={() => onPress(id)}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={defaultStyles.centered}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  if (!isLoading && events.length === 0) {
    return (
      <View style={defaultStyles.centered}>
        <HelperText>No events found!. Add some!!</HelperText>
        <FAB
          style={defaultStyles.fab}
          medium
          icon="plus"
          onPress={() => onPress()}
        />
      </View>
    );
  }

  return (
    <View style={defaultStyles.occupy}>
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
          Event {snackbarMsg}.
        </Snackbar>
      </View>
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
