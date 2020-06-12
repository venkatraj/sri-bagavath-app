import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, HelperText, Switch } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Picker } from '@react-native-community/picker';

const ProductForm = (props) => {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        price: '',
        category: 'book',
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={yup.object().shape({
        title: yup.string().min(5).required(),
        description: yup.string(),
        price: yup.number().required(),
        category: yup.string().required(),
      })}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
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
            onValueChange={handleChange('category')}
            onBlur={handleBlur('category')}
            value={values.title}
          >
            <Picker.Item label="Book" value="book" />
            <Picker.Item label="CD/DVD" value="cd_dvd" />
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
