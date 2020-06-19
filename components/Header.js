import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {
  const { navigation } = props;
  return (
    <Appbar.Header>
      <Appbar.Content title="Authenticate" />
    </Appbar.Header>
  );
};

export default Header;
