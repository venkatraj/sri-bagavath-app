import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Subheading, Paragraph } from 'react-native-paper';

const EventItem = (props) => {
  const { name, host, venue, date } = props.eventData;
  return (
    <Card style={styles.eventItem}>
      <Card.Content>
        <Title>{name}</Title>
        <Subheading>வழங்குபவர்: {host}</Subheading>
        <Paragraph>நடைபெறும் இடம்: {venue}</Paragraph>
        <Paragraph>நாள்: {date.toDateString()}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  eventItem: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default EventItem;
