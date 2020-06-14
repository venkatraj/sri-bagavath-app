import React, { Fragment } from 'react';
import { Keyboard, View, Text } from 'react-native';
import { Button, TextInput, HelperText, Switch } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as DocumentPicker from 'expo-document-picker';

import getEBook from '../../utils/getEBook';
import { addEBook, editEBook } from '../../store/actions/ebooks';
import { firebase } from '../../firebase/firebase';

const EBookForm = (props) => {
  const { id, onSubmitHandler } = props;
  const ebooks = useSelector((state) => state.ebooks);
  const dispatch = useDispatch();
  let ebook, name, uri;
  if (id) {
    ebook = getEBook(id, ebooks);
  }

  const chooseEBook = () => {
    DocumentPicker.getDocumentAsync().then((result) => {
      if (result.type !== 'cancel') {
        ({ uri, name } = result);
      }
    });
  };

  const onSubmit = (values) => {
    Keyboard.dismiss();
    if (id) {
      dispatch(editEBook(id, values));
    } else {
      dispatch(addEBook(values, name, uri));
    }
    onSubmitHandler();
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
      }}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape({
        title: yup.string().min(5).required(),
        description: yup.string().min(5).required(),
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
          <Button onPress={chooseEBook}>Choose EBook</Button>
          <Button disabled={!isValid} onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default EBookForm;
