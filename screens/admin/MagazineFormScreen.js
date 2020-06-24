import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from 'react-native-paper';

import MagazineForm from '../../components/admin/MagazineForm';
import defaultStyles from '../../theme/defaultStyles';

const MagazineFormScreen = (props) => {
  const { navigation } = props;
  const id = props.route.params.id;

  const onSubmitHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      <MagazineForm onSubmitHandler={onSubmitHandler} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MagazineFormScreen;
