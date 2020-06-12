import React, { Fragment } from 'react';
import { Keyboard, View, Text } from 'react-native';
import { Button, TextInput, HelperText, Switch } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import getEvent from '../../utils/getEvent';
import { addEvent, editEvent } from '../../store/actions/events';

const EventForm = (props) => {
  const { id, onSubmitHandler } = props;
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  let event;
  if (id) {
    event = getEvent(id, events);
  }

  const onSubmit = (values) => {
    Keyboard.dismiss();
    if (id) {
      dispatch(editEvent(id, values));
    } else {
      dispatch(addEvent(values));
    }
    onSubmitHandler();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        host: '',
        venue: '',
        price: '',
        date: '',
      }}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape({
        name: yup.string().min(5).required(),
        host: yup.string().min(5).required(),
        venue: yup.string().required(),
        price: yup.string().required(),
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
            label="Name"
            id="name"
            name="name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name ? (
            <HelperText>{errors.name}</HelperText>
          ) : null}
          <TextInput
            label="Host"
            id="host"
            name="host"
            onChangeText={handleChange('host')}
            onBlur={handleBlur('host')}
            value={values.host}
          />
          <TextInput
            label="Venue"
            id="venue"
            name="venue"
            onChangeText={handleChange('venue')}
            onBlur={handleBlur('venue')}
            value={values.venue}
            multiline
            numberOfLines={3}
          />
          <TextInput
            label="Price"
            id="price"
            name="price"
            onChangeText={handleChange('price')}
            onBlur={handleBlur('price')}
            value={values.price}
            keyboardType="number-pad"
          />
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

export default EventForm;
