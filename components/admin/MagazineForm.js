import React from 'react';
import { Keyboard, View } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import getMagazine from '../../utils/getMagazine';
import { addMagazine, editMagazine } from '../../store/actions/magazines';

const MagazineForm = (props) => {
  const { id, onSubmitHandler } = props;
  const magazines = useSelector((state) => state.magazines);
  const dispatch = useDispatch();
  let magazine;
  if (id) {
    magazine = getMagazine(id, magazines);
  }

  const onSubmit = (values) => {
    Keyboard.dismiss();
    if (id) {
      dispatch(editMagazine(id, values));
    } else {
      dispatch(addMagazine(values));
    }
    onSubmitHandler();
  };

  return (
    <Formik
      initialValues={{
        date: '',
      }}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape({
        date: yup.string().required(),
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
          <Button disabled={!isValid} onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default MagazineForm;
