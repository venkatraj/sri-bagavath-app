import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from 'react-native-paper';

import ProductForm from '../../components/admin/ProductForm';
import defaultStyles from '../../theme/defaultStyles';

const ProductFormScreen = (props) => {
  const { navigation } = props;
  const id = props.route.params.id;
  const title = id ? 'Edit Product' : 'Add Product';

  const onSubmitHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Title style={defaultStyles.title}>{title}</Title>
      <ProductForm onSubmitHandler={onSubmitHandler} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductFormScreen;
