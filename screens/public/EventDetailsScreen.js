import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Card,
  Title,
  Paragraph,
  Subheading,
  useTheme,
} from 'react-native-paper';
import { useSelector } from 'react-redux';

import defaultStyles from '../../theme/defaultStyles';
import getEvent from '../../utils/getEvent';

const EventDetailsScreen = (props) => {
  const { navigation } = props;
  const { colors } = useTheme();
  const id = props.route.params.id;
  const events = useSelector((state) => state.events);
  const event = getEvent(id, events);
  const { name, host, venue, price, startDate, endDate } = event;
  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title>{name}</Title>
        <Subheading>{host}</Subheading>
        <Paragraph>{venue}</Paragraph>
        <View style={defaultStyles.rowSpaced}>
          <Paragraph>Price: Rs.{price}</Paragraph>
          <Paragraph>
            Date: {startDate} - {endDate}
          </Paragraph>
        </View>
      </Card.Content>
      <Card.Actions style={defaultStyles.eventButtons}>
        <Button
          mode="contained"
          color={colors.accent}
          onPress={() => navigation.goBack()}
        >
          Go Back
        </Button>
        {/* <Button mode="contained" color={colors.accent}>
          Add To Cart
        </Button> */}
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EventDetailsScreen;
