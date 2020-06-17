import React, { useState } from 'react';
import { Keyboard, View } from 'react-native';
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

import getEBook from '../../utils/getEBook';
import { addEBook, editEBook } from '../../store/actions/ebooks';

const EBookForm = (props) => {
  const { id, onSubmitHandler } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ebooks = useSelector((state) => state.ebooks);
  const dispatch = useDispatch();
  let ebook, name, uri;
  if (id) {
    ebook = getEBook(id, ebooks);
  }

  const chooseEBook = async (setFieldValue) => {
    const result = await DocumentPicker.getDocumentAsync();
    if (result.type !== 'cancel') {
      ({ uri, name } = result);
      setFieldValue('ebook', name);
    }
  };

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    setIsSubmitting(true);
    if (id) {
      await dispatch(editEBook(id, values));
      setIsSubmitting(false);
    } else {
      await dispatch(addEBook(values, name, uri));
      setIsSubmitting(false);
    }

    onSubmitHandler();
  };

  return (
    <View>
      <Formik
        initialValues={{
          title: ebook ? ebook.title : '',
          description: ebook ? ebook.description : '',
          ebook: ebook ? ebook.downloadUrl : '',
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          title: yup.string().min(5).required(),
          description: yup.string().min(5).required(),
          ebook: yup.string().required(),
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
            {touched.description && errors.description ? (
              <HelperText>{errors.description}</HelperText>
            ) : null}
            <TextInput
              label="EBook"
              id="ebook"
              name="ebook"
              value={values.ebook}
            />
            {touched.ebook && errors.ebook ? (
              <HelperText>{errors.ebook}</HelperText>
            ) : null}
            {!ebook && (
              <Button
                onPress={() => {
                  chooseEBook(setFieldValue);
                }}
              >
                Choose EBook
              </Button>
            )}
            <Button disabled={!isValid} onPress={handleSubmit}>
              Submit
            </Button>
          </View>
        )}
      </Formik>
      <ActivityIndicator animating={isSubmitting} size="large" />
    </View>
  );
};

export default EBookForm;
