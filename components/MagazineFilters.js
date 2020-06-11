import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Menu } from 'react-native-paper';

import Range from '../constants/Range';

const MagazineFilters = (props) => {
  const [visibility, setVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const openMenu = () => setVisibility(true);

  const closeMenu = () => setVisibility(false);

  const years = [];
  for (let year of Range.magazines) {
    years.push(
      <Menu.Item
        key={year}
        onPress={() => {
          setSelectedItem(year);
          closeMenu();
        }}
        title={year}
      />
    );
  }

  console.log(selectedItem);

  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Menu
        visible={visibility}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Filter by Year:</Button>}
      >
        {years}
      </Menu>
      <Paragraph>{selectedItem}</Paragraph>
    </View>
  );
};

export default MagazineFilters;
