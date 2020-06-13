import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, FAB, Snackbar, HelperText } from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import ProductItem from '../../components/ProductItem';
import { deleteProduct } from '../../store/actions/products';

const ShopAdminScreen = (props) => {
  const { navigation } = props;
  let products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);

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
        <Card>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={onDelete}>Delete</Button>
            <Button onPress={() => onPress(id)}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View style={defaultStyles.occupy}>
      {products.length === 0 ? (
        <HelperText>No products found!. Add Some</HelperText>
      ) : (
        <View>
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
      )}
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

export default ShopAdminScreen;
