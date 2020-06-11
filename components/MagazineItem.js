import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import defaultStyles from '../theme/defaultStyles';

const MagazineItem = (props) => {
  const { date, url } = props.magazineData;
  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Paragraph style={defaultStyles.centeredText}>
          {date.toDateString()}
        </Paragraph>
        <Card.Actions style={defaultStyles.centered}>
          <Button onPress={() => console.log(url)}>Download</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default MagazineItem;
