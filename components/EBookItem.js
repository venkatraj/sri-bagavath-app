import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Title } from 'react-native-paper';

import defaultStyles from '../theme/defaultStyles';

const EBookItem = (props) => {
  const { title, url, description } = props.ebookData;

  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title style={defaultStyles.centeredText}>{title}</Title>
        <Card.Actions style={defaultStyles.centered}>
          <Button onPress={() => {}}>Download</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EBookItem;
