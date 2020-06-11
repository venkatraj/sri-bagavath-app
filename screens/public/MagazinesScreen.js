import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MagazineItem from '../../components/MagazineItem';
import MagazineFilters from '../../components/MagazineFilters';

const MagazinesScreen = (props) => {
  const [selectedYear, setSelectedYear] = useState('');
  const allMagazines = useSelector((state) => state.magazines);
  const [magazines, setMagazines] = useState(allMagazines);

  const onSelect = (year) => {
    if (year) {
      const filteredMagazines = allMagazines.filter(
        (magazine) => magazine.date.getFullYear() === year
      );
      setMagazines(filteredMagazines);
    } else {
      setMagazines(allMagazines);
    }
    setSelectedYear(year);
  };

  const renderMagazine = (itemData) => {
    return <MagazineItem magazineData={itemData.item} />;
  };

  return (
    <FlatList
      data={magazines}
      renderItem={renderMagazine}
      ListHeaderComponent={() => (
        <MagazineFilters selectedYear={selectedYear} onSelect={onSelect} />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default MagazinesScreen;
