import React, { Fragment } from 'react';
import { Keyboard, View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, HelperText, Switch } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Picker } from '@react-native-community/picker';

import getProduct from '../../utils/getProduct';
import { addProduct, editProduct } from '../../store/actions/products';

const ProductForm = (props) => {
  const { id, onSubmitHandler } = props;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let product;
  if (id) {
    product = getProduct(id, products);
  }

  const onSubmit = (values) => {
    Keyboard.dismiss();
    if (id) {
      dispatch(editProduct(id, values));
    } else {
      dispatch(addProduct(values));
    }
    onSubmitHandler();
  };

  return (
    <Formik
      initialValues={{
        title: id ? product.title : '',
        description: id ? product.description : '',
        price: id ? product.price.toString() : '',
        category: id ? product.category : 'Book',
      }}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape({
        title: yup.string().min(5).required(),
        description: yup.string(),
        price: yup.string().required(),
        category: yup.string().required(),
      })}
    >
      {({
        initialValues,
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        setFieldValue,
      }) => (
        <View>
          <TextInput
            label="Title"
            id="title"
            name="title"
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
          {touched.title && errors.title ? (
            <HelperText>{errors.title}</HelperText>
          ) : null}
          <TextInput
            label="Description"
            id="description"
            name="description"
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
            multiline
            numberOfLines={3}
          />
          {touched.description && errors.description ? (
            <HelperText>{errors.description}</HelperText>
          ) : null}
          <TextInput
            label="Price"
            id="price"
            name="price"
            onChangeText={handleChange('price')}
            onBlur={handleBlur('price')}
            value={values.price}
          />
          <Picker
            id="category"
            name="category"
            onValueChange={(itemValue) => setFieldValue('category', itemValue)}
            // onBlur={handleBlur('category')}
            selectedValue={values.category || initialValues.category}
          >
            <Picker.Item label="Book" value="Book" />
            <Picker.Item label="CD/DVD" value="CD/DVD" />
          </Picker>
          <Button disabled={!isValid} onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  picker: { height: 50, width: 100 },
});
export default ProductForm;
