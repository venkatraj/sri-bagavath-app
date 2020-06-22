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
  useTheme,
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
  const { colors } = useTheme();

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
          <Button
            mode="contained"
            color={colors.secondary}
            onPress={() => onDelete(id)}
          >
            Delete
          </Button>
          <Button
            mode="contained"
            color={colors.secondary}
            onPress={() => onEdit(id)}
          >
            Edit
          </Button>
        </Card.Actions>
      )}
      <Card.Actions style={defaultStyles.rowSpaced}>
        <Button
          mode="contained"
          color={colors.accent}
          onPress={() => {
            onPress(id);
          }}
        >
          View Details
        </Button>
        <Button mode="contained" color={colors.accent}>
          Add To Cart
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EventItem;
