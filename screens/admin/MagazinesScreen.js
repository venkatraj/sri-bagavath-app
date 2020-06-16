import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, FAB, Snackbar, HelperText } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import MagazineItem from '../../components/MagazineItem';
import { fetchMagazines, deleteMagazine } from '../../store/actions/magazines';

const MagazinesAdminScreen = (props) => {
  const { navigation } = props;
  const magazines = useSelector((state) => state.magazines);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  useEffect(() => {
    dispatch(fetchMagazines());
  }, [dispatch]);

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
      setSnackbarMsg('deleted!');
    };

    const onDownload = (msg) => {
      setVisibility(true);
      setSnackbarMsg(msg);
    };

    return (
      <View>
        <MagazineItem magazineData={itemData.item} onDownload={onDownload} />
        <Card style={defaultStyles.btnContainer}>
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
            Magazine {snackbarMsg}.
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
