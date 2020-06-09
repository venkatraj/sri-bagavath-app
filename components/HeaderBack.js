import * as React from 'react';
import { Appbar } from 'react-native-paper';

const HeaderBack = (props) => {
  const { navigation } = props;
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Sri Bagavath" subtitle="Flow with flow" />
    </Appbar.Header>
  );
};

export default HeaderBack;
