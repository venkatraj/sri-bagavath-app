import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  ActivityIndicator,
  Button,
  Card,
  FAB,
  Snackbar,
  HelperText,
  Title,
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
  const [error, setError] = useState(null);

  const loadEvents = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(fetchEvents());
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadEvents);
    return unsubscribe;
  }, [loadEvents]);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

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

  if (error) {
    return (
      <View style={defaultStyles.centered}>
        <HelperText>{error}</HelperText>
        <Button onPress={loadEvents}>Try again!</Button>
      </View>
    );
  }

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
      <View style={defaultStyles.bottomSpace}>
        <Title style={defaultStyles.title}>Events</Title>
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
