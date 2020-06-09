import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MagazineItem from '../../components/MagazineItem';

const MagazinesScreen = (props) => {
  const magazines = useSelector((state) => state.magazines);

  const renderMagazine = (itemData) => {
    return <MagazineItem magazineData={itemData.item} />;
  };

  return <FlatList data={magazines} renderItem={renderMagazine} />;
};

const styles = StyleSheet.create({});

export default MagazinesScreen;
