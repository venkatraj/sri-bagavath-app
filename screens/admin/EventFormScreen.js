import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from 'react-native-paper';

import EventForm from '../../components/admin/EventForm';
import defaultStyles from '../../theme/defaultStyles';

const EventFormScreen = (props) => {
  const { navigation } = props;
  const id = props.route.params.id;
  const title = id ? 'Edit Event' : 'Add Event';

  const onSubmitHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Title style={defaultStyles.title}>{title}</Title>
      <EventForm onSubmitHandler={onSubmitHandler} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EventFormScreen;
