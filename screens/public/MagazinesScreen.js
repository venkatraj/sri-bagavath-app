import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MagazineItem from '../../components/MagazineItem';
import MagazineFilters from '../../components/MagazineFilters';

const MagazinesScreen = (props) => {
  const magazines = useSelector((state) => state.magazines);

  const renderMagazine = (itemData) => {
    return <MagazineItem magazineData={itemData.item} />;
  };

  return (
    <FlatList
      data={magazines}
      renderItem={renderMagazine}
      ListHeaderComponent={MagazineFilters}
    />
  );
};

const styles = StyleSheet.create({});

export default MagazinesScreen;
