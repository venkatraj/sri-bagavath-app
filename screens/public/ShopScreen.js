import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, ScrollView, View, Alert } from 'react-native';
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
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(fetchProducts());
      setIsRefreshing(false);
    } catch (e) {
      setError(e.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadProducts);
    return unsubscribe;
  }, [loadProducts]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => setIsLoading(false));
  }, [loadProducts]);

  const onPress = (id) => {
    navigation.push('Shop', {
      screen: 'ProductDetails',
      params: { id },
    });
  };

  const onCreateAndEdit = (id = '') => {
    navigation.push('Shop', {
      screen: 'ProductForm',
      params: { id },
    });
  };

  const onDelete = (id) => {
    Alert.alert(
      'Are you sure?',
      "Product will be deleted. This can't be undone!",
      [
        {
          text: 'OK',
          onPress: () => {
            dispatch(deleteProduct(id));
            setVisibility(true);
          },
        },
        {
          text: 'Cancel',
        },
      ]
    );
  };

  const renderProduct = (itemData) => {
    return (
      <ProductItem
        productData={itemData.item}
        onPress={onPress}
        onDelete={onDelete}
        onEdit={onCreateAndEdit}
      />
    );
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
        {isLoggedIn && (
          <FAB
            style={defaultStyles.fab}
            medium
            icon="plus"
            onPress={() => onCreateAndEdit()}
          />
        )}
      </View>
    );
  }

  return (
    <View style={defaultStyles.occupy}>
      <View style={defaultStyles.bottomSpace}>
        <FlatList
          onRefresh={loadProducts}
          refreshing={isRefreshing}
          data={products}
          renderItem={renderProduct}
        />

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
      {isLoggedIn && (
        <FAB
          style={defaultStyles.fab}
          medium
          icon="plus"
          onPress={() => onCreateAndEdit()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShopScreen;
