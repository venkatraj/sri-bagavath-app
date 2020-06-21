import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph, Snackbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import defaultStyles from '../theme/defaultStyles';
import { deleteProduct } from '../store/actions/products';

const ProductItem = (props) => {
  const { productData: product, onPress, onEdit, onDelete } = props;
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;

  const {
    id,
    title,
    description,
    imageUrl,
    price,
    category,
    language,
  } = product;

  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>Price: Rs.{price}</Paragraph>
        <Paragraph>Available as: {category}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: imageUrl }} />
      {isLoggedIn && (
        <Card.Actions style={defaultStyles.rowSpaced}>
          <Button onPress={() => onDelete(id)}>Delete</Button>
          <Button onPress={() => onEdit(id)}>Edit</Button>
        </Card.Actions>
      )}
      <Card.Actions style={defaultStyles.rowSpaced}>
        <Button
          onPress={() => {
            onPress(id);
          }}
        >
          View Details
        </Button>
        <Button>Add To Cart</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default ProductItem;
