import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Paragraph, Menu } from 'react-native-paper';

import Range from '../constants/Range';

const MagazineFilters = (props) => {
  const [visibility, setVisibility] = useState(false);
  const { selectedYear, onSelect } = props;

  const openMenu = () => setVisibility(true);

  const closeMenu = () => setVisibility(false);

  const years = [];
  for (let year of Range.magazines) {
    years.push(
      <Menu.Item
        key={year}
        onPress={() => {
          onSelect(year);
          closeMenu();
        }}
        title={year}
      />
    );
  }

  return (
    <View style={styles.menuContainer}>
      <Menu
        visible={visibility}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Filter by Year:</Button>}
      >
        <Menu.Item
          key="all"
          onPress={() => {
            onSelect('');
            closeMenu();
          }}
          title="All"
        />
        {years}
      </Menu>
      <Paragraph>{selectedYear}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MagazineFilters;
