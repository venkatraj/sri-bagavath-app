import React, { useState } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import {
  ActivityIndicator,
  Button,
  TextInput,
  HelperText,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as DocumentPicker from 'expo-document-picker';

import getProduct from '../../utils/getProduct';
import { addProduct, editProduct } from '../../store/actions/products';

const ProductForm = (props) => {
  const { id, onSubmitHandler } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let product, name, uri;
  if (id) {
    product = getProduct(id, products);
  }

  const chooseProductImage = async (setFieldValue) => {
    const result = await DocumentPicker.getDocumentAsync();
    if (result.type !== 'cancel') {
      ({ uri, name } = result);
      setFieldValue('productImage', name);
    }
  };

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    setIsSubmitting(true);
    if (id) {
      await dispatch(editProduct(id, values));
      setIsSubmitting(false);
    } else {
      await dispatch(addProduct(values, name, uri));
      setIsSubmitting(false);
    }
    onSubmitHandler();
  };

  return (
    <ScrollView>
      <Formik
        initialValues={{
          title: product ? product.title : '',
          description: product ? product.description : '',
          price: product ? product.price.toString() : '',
          category: product ? product.category : 'Book',
          language: product ? product.language : 'Tamil',
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          title: yup.string().trim().min(5).required(),
          description: yup.string().trim(),
          price: yup.string().trim().required(),
          category: yup.string().trim().required(),
          language: yup.string().trim().required(),
          productImage: yup.string().trim().required(),
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
            {touched.price && errors.price ? (
              <HelperText>{errors.price}</HelperText>
            ) : null}
            <TextInput
              label="Category"
              id="category"
              name="category"
              onChangeText={handleChange('category')}
              onBlur={handleBlur('category')}
              value={values.category}
            />
            {touched.category && errors.category ? (
              <HelperText>{errors.category}</HelperText>
            ) : null}
            <TextInput
              label="Language"
              id="language"
              name="language"
              onChangeText={handleChange('language')}
              onBlur={handleBlur('language')}
              value={values.language}
            />
            {touched.language && errors.language ? (
              <HelperText>{errors.language}</HelperText>
            ) : null}
            <TextInput
              label="Product Image"
              id="productImage"
              name="productImage"
              onChangeText={handleChange('productImage')}
              onBlur={handleBlur('productImage')}
              value={values.productImage}
            />
            {touched.productImage && errors.productImage ? (
              <HelperText>{errors.productImage}</HelperText>
            ) : null}
            <Button onPress={() => chooseProductImage(setFieldValue)}>
              Choose Product Image
            </Button>
            <Button disabled={!isValid} onPress={handleSubmit}>
              Submit
            </Button>
          </View>
        )}
      </Formik>
      <ActivityIndicator animating={isSubmitting} size="large" />
    </ScrollView>
  );
};

export default ProductForm;
