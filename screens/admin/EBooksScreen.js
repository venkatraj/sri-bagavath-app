import React from 'react';
import { Button, FlatList, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import EBookItem from '../../components/EBookItem';

const EBooksAdminScreen = (props) => {
  const ebooks = useSelector((state) => state.ebooks);

  const renderEBook = (itemData) => {
    return (
      <View>
        <EBookItem ebookData={itemData.item} />
        <Button onPress={() => {}} title="Dummy Button" />
      </View>
    );
  };

  return <FlatList data={ebooks} renderItem={renderEBook} />;
};

const styles = StyleSheet.create({});

export default EBooksAdminScreen;
