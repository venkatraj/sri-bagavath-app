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

const ShopAdminScreen = (props) => {
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

  const onPress = (id = null) => {
    navigation.push('ShopAdmin', {
      screen: 'Product',
      params: { id },
    });
  };

  const renderProduct = (itemData) => {
    const { id } = itemData.item;

    const onDelete = () => {
      dispatch(deleteProduct(id));
      setVisibility(true);
    };

    return (
      <View>
        <ProductItem isAuth={true} productData={itemData.item} />
        <Card style={defaultStyles.btnContainer}>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={onDelete}>Delete</Button>
            <Button onPress={() => onPress(id)}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
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
    <ScrollView style={defaultStyles.occupy}>
      <View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ShopAdminScreen;
