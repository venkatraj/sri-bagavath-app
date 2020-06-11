import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, FAB } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import EBookItem from '../../components/EBookItem';
import { deleteEBook } from '../../store/actions/ebooks';

const EBooksAdminScreen = (props) => {
  const ebooks = useSelector((state) => state.ebooks);
  const dispatch = useDispatch();

  const renderEBook = (itemData) => {
    const { id } = itemData.item;

    return (
      <View>
        <EBookItem ebookData={itemData.item} />
        <Card>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={() => dispatch(deleteEBook(id))}>Delete</Button>
            <Button onPress={() => {}}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={ebooks} renderItem={renderEBook} />
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

export default EBooksAdminScreen;
