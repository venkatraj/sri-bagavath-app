import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

import defaultStyles from '../theme/defaultStyles';

const ProductItem = (props) => {
  const { productData: product, onPress } = props;
  const { title, description, imageUrl, price, category } = product;
  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>Price: Rs.{price}</Paragraph>
        <Paragraph>Available as: {category}</Paragraph>
      </Card.Content>
      <Card.Actions style={defaultStyles.rowSpaced}>
        <Button
          onPress={() => {
            onPress(product);
          }}
        >
          View Details
        </Button>
        <Button>Add To Cart</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  productItem: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default ProductItem;
