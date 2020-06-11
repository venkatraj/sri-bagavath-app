import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Title, Subheading, Paragraph } from 'react-native-paper';

import defaultStyles from '../theme/defaultStyles';

const EventItem = (props) => {
  const { eventData: event, onPress } = props;
  const { id, name, host, venue, price, date } = event;

  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title>{name}</Title>
        <Subheading>வழங்குபவர்: {host}</Subheading>
        <Paragraph>நடைபெறும் இடம்: {venue}</Paragraph>
        <Paragraph>நாள்: {date.toDateString()}</Paragraph>
      </Card.Content>
      <Card.Actions style={defaultStyles.rowSpaced}>
        <Button
          onPress={() => {
            onPress(id);
          }}
        >
          View Details
        </Button>
        <Paragraph>{price}</Paragraph>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EventItem;
