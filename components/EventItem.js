import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
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
  const { eventData: event, onPress, onDelete, onEdit } = props;
  const {
    id,
    title,
    description,
    host,
    venue,
    price,
    startDate,
    endDate,
  } = event;
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;

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
      {isLoggedIn && (
        <Card.Actions style={defaultStyles.rowSpaced}>
          <Button onPress={() => onDelete(id)}>Delete</Button>
          <Button onPress={() => onEdit(id)}>Edit</Button>
        </Card.Actions>
      )}
      <Card.Actions style={defaultStyles.rowSpaced}>
        <Button
          onPress={() => {
            onPress(id);
          }}
        >
          View Details
        </Button>
        <Button>Add To Cart</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EventItem;
