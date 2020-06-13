import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, FAB, Snackbar, HelperText } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import MagazineItem from '../../components/MagazineItem';
import { deleteMagazine } from '../../store/actions/magazines';

const MagazinesAdminScreen = (props) => {
  const { navigation } = props;
  const magazines = useSelector((state) => state.magazines);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);

  const onPress = (id = null) => {
    navigation.push('MagazinesAdmin', {
      screen: 'Magazine',
      params: { id },
    });
  };

  const renderMagazine = (itemData) => {
    const { id } = itemData.item;

    const onDelete = () => {
      dispatch(deleteMagazine(id));
      setVisibility(true);
    };

    return (
      <View>
        <MagazineItem magazineData={itemData.item} />
        <Card>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={onDelete}>Delete</Button>
            <Button onPress={() => onPress(id)}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View style={defaultStyles.occupy}>
      {magazines.length === 0 ? (
        <View>
          <HelperText>No magazines found. Add some!</HelperText>
        </View>
      ) : (
        <View>
          <FlatList data={magazines} renderItem={renderMagazine} />
          <Snackbar
            visible={visibility}
            onDismiss={() => setVisibility(false)}
            action={{
              label: 'Okay',
              duration: 3000,
              onPress: () => {
                // Do something
              },
            }}
          >
            Magazine deleted!
          </Snackbar>
        </View>
      )}
      <FAB
        style={defaultStyles.fab}
        medium
        icon="plus"
        onPress={() => onPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MagazinesAdminScreen;
