import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, FAB } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import MagazineItem from '../../components/MagazineItem';
import { deleteMagazine } from '../../store/actions/magazines';

const MagazinesAdminScreen = (props) => {
  const magazines = useSelector((state) => state.magazines);
  const dispatch = useDispatch();

  const renderMagazine = (itemData) => {
    const { id } = itemData.item;

    return (
      <View>
        <MagazineItem magazineData={itemData.item} />
        <Card>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={() => dispatch(deleteMagazine(id))}>Delete</Button>
            <Button onPress={() => {}}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={magazines} renderItem={renderMagazine} />
      <FAB
        style={defaultStyles.fab}
        medium
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MagazinesAdminScreen;
