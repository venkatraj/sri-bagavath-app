import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, ScrollView, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  ActivityIndicator,
  Card,
  Button,
  FAB,
  Snackbar,
  HelperText,
  Title,
} from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import ProductItem from '../../components/ProductItem';
import { fetchProducts, deleteProduct } from '../../store/actions/products';

const ShopScreen = (props) => {
  const { navigation } = props;
  let products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(fetchProducts());
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadProducts);
    return unsubscribe;
  }, [loadProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const onPress = (id) => {
    navigation.push('Shop', {
      screen: 'ProductDetails',
      params: { id },
    });
  };

  const renderProduct = (itemData) => {
    return <ProductItem productData={itemData.item} onPress={onPress} />;
  };

  if (error) {
    return (
      <View style={defaultStyles.centered}>
        <HelperText>{error}</HelperText>
        <Button onPress={loadProducts}>Try again!</Button>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={defaultStyles.centered}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={defaultStyles.centered}>
        <HelperText>No products found! Add some!!</HelperText>
        <FAB
          style={defaultStyles.fab}
          medium
          icon="plus"
          onPress={() => onPress()}
        />
      </View>
    );
  }

  return (
    <View style={defaultStyles.occupy}>
      <View style={defaultStyles.bottomSpace}>
        <Title style={defaultStyles.title}>Products</Title>
        <FlatList data={products} renderItem={renderProduct} />

        <Snackbar
          visible={visibility}
          onDismiss={() => setVisibility(false)}
          action={{
            label: 'Okay',
            duration: 3000,
            onPress: () => {
              // Do something
            },
          }}
        >
          Product deleted!
        </Snackbar>
      </View>
      <FAB
        style={defaultStyles.fab}
        medium
        icon="plus"
        onPress={() => onPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShopScreen;
