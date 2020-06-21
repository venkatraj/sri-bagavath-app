import React from 'react';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';

const HeaderBack = (props) => {
  const { scene, previous, route, navigation } = props;
  const { options } = scene.descriptor;
  const title = options.title ? options.title : 'Sri Bagavath';
  const subtitle = title ? '' : 'Flow with flow...';
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title={title} subtitle={subtitle} />
    </Appbar.Header>
  );
};

export default HeaderBack;
