import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Title } from 'react-native-paper';

import defaultStyles from '../theme/defaultStyles';

const EBookItem = (props) => {
  const { title, url, description } = props.ebookData;
  return (
    <Card style={defaultStyles.item}>
      <Card.Content style={defaultStyles.centered}>
        <Title>{title}</Title>
      </Card.Content>
      <Card.Actions style={defaultStyles.rowSpaced}>
        <Button>View Details</Button>
        <Button onPress={() => {}}>Download</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EBookItem;
