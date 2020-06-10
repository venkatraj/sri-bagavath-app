import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Title } from 'react-native-paper';

const EBookItem = (props) => {
  const { title, url, description } = props.ebookData;
  return (
    <Card style={styles.ebookItem}>
      <Card.Content style={styles.centered}>
        <Title>{title}</Title>
      </Card.Content>
      <Card.Actions style={styles.spacedButtons}>
        <Button>View Details</Button>
        <Button onPress={() => {}}>Download</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  ebookItem: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  centered: {
    alignItems: 'center',
  },
  spacedButtons: { justifyContent: 'space-between' },
});

export default EBookItem;
