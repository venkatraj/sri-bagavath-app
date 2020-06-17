import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from 'react-native-paper';

import EBookForm from '../../components/admin/EBookForm';
import defaultStyles from '../../theme/defaultStyles';

const EBookFormScreen = (props) => {
  const { navigation } = props;
  const id = props.route.params.id;
  const title = id ? 'Edit EBook' : 'Add EBook';

  const onSubmitHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Title style={defaultStyles.title}>{title}</Title>
      <EBookForm onSubmitHandler={onSubmitHandler} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EBookFormScreen;
