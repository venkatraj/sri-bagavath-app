import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/ProductItem';

const ShopScreen = (props) => {
  const { navigation } = props;
  const products = useSelector((state) => state.products);

  const onPress = (id) => {
    navigation.push('Shop', {
      screen: 'ProductDetails',
      params: { id },
    });
  };

  const renderProduct = (itemData) => {
    return <ProductItem productData={itemData.item} onPress={onPress} />;
  };

  return <FlatList data={products} renderItem={renderProduct} />;
};

const styles = StyleSheet.create({});

export default ShopScreen;
