import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {
  const { onPress } = props;
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={onPress} />
      <Appbar.Content title="Sri Bagavath" subtitle="Flow with flow" />
      <Appbar.Action icon="bell" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default Header;
