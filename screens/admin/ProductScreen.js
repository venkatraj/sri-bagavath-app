import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import ProductForm from '../../components/admin/ProductForm';

const ProductScreen = (props) => {
  const { navigation } = props;
  const id = props.route.params.id;
  const title = id ? <Text>Edit Product</Text> : <Text>Add Product</Text>;

  const onSubmitHandler = () => {
    navigation.goBack();
  };
  return (
    <View>
      {title}
      <ProductForm onSubmitHandler={onSubmitHandler} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductScreen;
