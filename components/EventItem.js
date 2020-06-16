import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Title,
  Subheading,
  Paragraph,
  Snackbar,
} from 'react-native-paper';

import defaultStyles from '../theme/defaultStyles';

const EventItem = (props) => {
  const { eventData: event, onPress } = props;
  const { title, description, host, venue, price, startDate, endDate } = event;

  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title>{title}</Title>
        <Subheading>வழங்குபவர்: {host}</Subheading>
        <Paragraph>நடைபெறும் இடம்: {venue}</Paragraph>
        <Paragraph>
          நாள்: {startDate} - {endDate}
        </Paragraph>
        <Paragraph>Rs. {price}/-</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EventItem;
