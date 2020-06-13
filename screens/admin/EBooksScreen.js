import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, FAB, Snackbar, HelperText } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import EBookItem from '../../components/EBookItem';
import { deleteEBook } from '../../store/actions/ebooks';

const EBooksAdminScreen = (props) => {
  const { navigation } = props;
  const ebooks = useSelector((state) => state.ebooks);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);

  const onPress = (id = null) => {
    navigation.push('EBooksAdmin', {
      screen: 'EBook',
      params: { id },
    });
  };

  const renderEBook = (itemData) => {
    const { id } = itemData.item;

    const onDelete = () => {
      dispatch(deleteEBook(id));
      setVisibility(true);
    };

    return (
      <View>
        <EBookItem ebookData={itemData.item} />
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
      {ebooks.length === 0 ? (
        <View>
          <HelperText>No ebooks found. Add some!</HelperText>
        </View>
      ) : (
        <View>
          <FlatList data={ebooks} renderItem={renderEBook} />
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
            EBook deleted.
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

export default EBooksAdminScreen;
