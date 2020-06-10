import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import EBookItem from '../../components/EBookItem';

const EBooksAdminScreen = (props) => {
  const ebooks = useSelector((state) => state.ebooks);

  const renderEBook = (itemData) => {
    return <EBookItem ebookData={itemData.item} />;
  };

  return <FlatList data={ebooks} renderItem={renderEBook} />;
};

const styles = StyleSheet.create({});

export default EBooksAdminScreen;
