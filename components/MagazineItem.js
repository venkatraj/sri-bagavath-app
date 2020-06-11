import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Card, Paragraph } from 'react-native-paper';

import defaultStyles from '../theme/defaultStyles';
import { deleteMagazine } from '../store/actions/magazines';

const MagazineItem = (props) => {
  const { id, date, url } = props.magazineData;
  const dispatch = useDispatch();

  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Paragraph style={defaultStyles.centeredText}>
          {date.toDateString()}
        </Paragraph>
        <Card.Actions style={defaultStyles.centered}>
          <Button onPress={() => console.log(url)}>Download</Button>
        </Card.Actions>
        <Card.Actions style={defaultStyles.rowSpaced}>
          <Button onPress={() => dispatch(deleteMagazine(id))}>Delete</Button>
          <Button onPress={() => {}}>Edit</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default MagazineItem;
