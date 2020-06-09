import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const MagazineItem = (props) => {
  const { date, url } = props.magazineData;
  return (
    <Card style={styles.magazineItem}>
      <Card.Content>
        <Paragraph>{date.toDateString()}</Paragraph>
        <Paragraph>{url}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  magazineItem: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default MagazineItem;
