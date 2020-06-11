import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { useSelector } from 'react-redux';

import defaultStyles from '../../theme/defaultStyles';
import getProduct from '../../utils/getProduct';

const ProductDetailsScreen = (props) => {
  const { navigation } = props;
  const products = useSelector((state) => state.products);
  const id = props.route.params.id;
  const product = getProduct(id, products);
  const { title, description, imageUrl, price, category } = product;
  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title>{title}</Title>
        <Subheading>Image Here</Subheading>
        <Paragraph>{description}</Paragraph>
        <View style={defaultStyles.rowSpaced}>
          <Paragraph>Price: Rs.{price}</Paragraph>
          <Paragraph>Available as: {category}</Paragraph>
        </View>
      </Card.Content>
      <Card.Actions style={defaultStyles.rowSpaced}>
        <Button onPress={() => navigation.goBack()}>Shop More</Button>
        <Button>Add To Cart</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
