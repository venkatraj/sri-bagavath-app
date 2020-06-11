import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-native-paper';

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
        <Card.Actions style={defaultStyles.rowSpaced}>
          <Button onPress={() => dispatch(deleteEBook(id))}>Delete</Button>
          <Button onPress={() => {}}>Edit</Button>
        </Card.Actions>
      </View>
    );
  };

  return <FlatList data={ebooks} renderItem={renderEBook} />;
};

const styles = StyleSheet.create({});

export default EBooksAdminScreen;
