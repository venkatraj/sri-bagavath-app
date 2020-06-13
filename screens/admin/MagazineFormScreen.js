import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MagazineForm from '../../components/admin/MagazineForm';

const MagazineFormScreen = (props) => {
  const { navigation } = props;
  const id = props.route.params.id;
  const title = id ? <Text>Edit Magazine</Text> : <Text>Add Magazine</Text>;

  const onSubmitHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      {title}
      <MagazineForm onSubmitHandler={onSubmitHandler} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MagazineFormScreen;
