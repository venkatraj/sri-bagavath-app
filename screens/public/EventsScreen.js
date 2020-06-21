import React, { useState, useEffect, useCallback } from 'react';
import { Alert, View, ScrollView, FlatList, StyleSheet } from 'react-native';
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

const EventsScreen = (props) => {
  const { navigation } = props;
  const events = useSelector((state) => state.events);
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;

  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const loadEvents = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(fetchEvents());
      setIsRefreshing(false);
    } catch (e) {
      setError(e.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadEvents);
    return unsubscribe;
  }, [loadEvents]);

  useEffect(() => {
    setIsLoading(true);
    loadEvents().then(() => setIsLoading(false));
  }, [loadEvents]);

  const onPress = (id) => {
    navigation.push('Events', {
      screen: 'EventDetails',
      params: { id },
    });
  };

  const onCreateAndEdit = (id = '') => {
    navigation.navigate('Events', {
      screen: 'EventForm',
      params: { id },
    });
  };

  const onDelete = (id) => {
    Alert.alert(
      'Are you sure?',
      "Event will be deleted. This can't be undone!",
      [
        {
          text: 'OK',
          onPress: () => {
            dispatch(deleteEvent(id));
            setVisibility(true);
          },
        },
        {
          text: 'Cancel',
        },
      ]
    );
  };

  const renderEvent = (itemData) => {
    return (
      <EventItem
        eventData={itemData.item}
        onEdit={onCreateAndEdit}
        onDelete={onDelete}
        onPress={onPress}
      />
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
        {isLoggedIn && (
          <FAB
            style={defaultStyles.fab}
            medium
            icon="plus"
            onPress={() => onCreateAndEdit()}
          />
        )}
      </View>
    );
  }

  return (
    <View style={defaultStyles.occupy}>
      <View style={defaultStyles.bottomSpace}>
        <FlatList
          onRefresh={loadEvents}
          refreshing={isRefreshing}
          data={events}
          renderItem={renderEvent}
        />
        {isLoggedIn && (
          <FAB
            style={defaultStyles.fab}
            medium
            icon="plus"
            onPress={() => onCreateAndEdit()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EventsScreen;
