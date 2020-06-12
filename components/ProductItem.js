import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

import defaultStyles from '../theme/defaultStyles';

const ProductItem = (props) => {
  const { productData: product, onPress, isAuth } = props;
  const { id, title, description, imageUrl, price, category } = product;
  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>Price: Rs.{price}</Paragraph>
        <Paragraph>Available as: {category}</Paragraph>
      </Card.Content>
      {!isAuth ? (
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
      ) : null}
    </Card>
  );
};

const styles = StyleSheet.create({});

export default ProductItem;
