import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import EventForm from '../../components/admin/EventForm';

const EventFormScreen = (props) => {
  const { navigation } = props;
  const id = props.route.params.id;
  const title = id ? <Text>Edit Event</Text> : <Text>Add Event</Text>;

  const onSubmitHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      {title}
      <EventForm onSubmitHandler={onSubmitHandler} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EventFormScreen;
