import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import EBookForm from '../../components/admin/EBookForm';

const EBookFormScreen = (props) => {
  const { navigation } = props;
  const id = props.route.params.id;
  const title = id ? <Text>Edit EBook</Text> : <Text>Add EBook</Text>;

  const onSubmitHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      {title}
      <EBookForm onSubmitHandler={onSubmitHandler} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EBookFormScreen;
