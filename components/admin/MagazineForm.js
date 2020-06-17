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

import getMagazine from '../../utils/getMagazine';
import { addMagazine, editMagazine } from '../../store/actions/magazines';

const MagazineForm = (props) => {
  const { id, onSubmitHandler } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const magazines = useSelector((state) => state.magazines);
  const dispatch = useDispatch();
  let magazine, name, uri;
  if (id) {
    magazine = getMagazine(id, magazines);
  }

  const chooseMagazine = async (setFieldValue) => {
    const result = await DocumentPicker.getDocumentAsync();
    if (result.type !== 'cancel') {
      ({ uri, name } = result);
      setFieldValue('magazine', name);
    }
  };

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    setIsSubmitting(true);
    if (id) {
      await dispatch(editMagazine(id, values));
      setIsSubmitting(false);
    } else {
      await dispatch(addMagazine(values, name, uri));
      setIsSubmitting(false);
    }
    onSubmitHandler();
  };

  return (
    <View>
      <Formik
        initialValues={{
          date: magazine ? magazine.date : '',
          magazine: magazine ? magazine.downloadUrl : '',
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          date: yup
            .string()
            .trim()
            .matches(
              /[0-9]{2}-[0-9]{2}-[0-9]{4}/,
              'Should be in DD-MM-YYYY format'
            )
            .required(),
          magazine: yup.string().required(),
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
              label="Date"
              id="date"
              name="date"
              onChangeText={handleChange('date')}
              onBlur={handleBlur('date')}
              value={values.date}
              keyboardType="number-pad"
            />
            {touched.date && errors.date ? (
              <HelperText>{errors.date}</HelperText>
            ) : null}
            <TextInput
              label="Magazine"
              id="magazine"
              name="magazine"
              value={values.magazine}
            />
            {touched.magazine && errors.magazine ? (
              <HelperText>{errors.magazine}</HelperText>
            ) : null}
            {!magazine && (
              <Button onPress={() => chooseMagazine(setFieldValue)}>
                Choose Magazine
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

export default MagazineForm;
