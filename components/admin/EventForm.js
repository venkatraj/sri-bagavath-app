import React, { useState } from 'react';
import { Keyboard, StyleSheet, ScrollView, View } from 'react-native';
import {
  ActivityIndicator,
  Button,
  TextInput,
  HelperText,
  useTheme,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import getEvent from '../../utils/getEvent';
import { addEvent, editEvent } from '../../store/actions/events';

const EventForm = (props) => {
  const { id, onSubmitHandler } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { colors } = useTheme();

  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  let event;
  if (id) {
    event = getEvent(id, events);
  }

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    setIsSubmitting(true);
    if (id) {
      await dispatch(editEvent(id, values));
      setIsSubmitting(false);
    } else {
      await dispatch(addEvent(values));
      setIsSubmitting(false);
    }
    onSubmitHandler();
  };

  return (
    <ScrollView>
      <Formik
        initialValues={{
          title: event ? event.title : '',
          description: event ? event.description : '',
          host: event ? event.host : '',
          venue: event ? event.venue : '',
          price: event ? event.price : '',
          startDate: event ? event.startDate : '',
          endDate: event ? event.endDate : '',
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          title: yup.string().min(5).required(),
          description: yup.string().min(5).required(),
          host: yup.string().min(5).required(),
          venue: yup.string().required(),
          price: yup.string().required(),
          startDate: yup.string().required(),
          endDate: yup.string().required(),
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
              label="Host"
              id="host"
              name="host"
              onChangeText={handleChange('host')}
              onBlur={handleBlur('host')}
              value={values.host}
            />
            {touched.host && errors.host ? (
              <HelperText>{errors.host}</HelperText>
            ) : null}
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
            {touched.venue && errors.venue ? (
              <HelperText>{errors.venue}</HelperText>
            ) : null}
            <TextInput
              label="Price"
              id="price"
              name="price"
              onChangeText={handleChange('price')}
              onBlur={handleBlur('price')}
              value={values.price}
              keyboardType="number-pad"
            />
            {touched.price && errors.price ? (
              <HelperText>{errors.price}</HelperText>
            ) : null}
            <TextInput
              label="Start Date"
              id="startDate"
              name="startDate"
              onChangeText={handleChange('startDate')}
              onBlur={handleBlur('startDate')}
              value={values.startDate}
            />
            {touched.startDate && errors.startDate ? (
              <HelperText>{errors.startDate}</HelperText>
            ) : null}
            <TextInput
              label="End Date"
              id="endDate"
              name="endDate"
              onChangeText={handleChange('endDate')}
              onBlur={handleBlur('endDate')}
              value={values.endDate}
            />
            {touched.endDate && errors.endDate ? (
              <HelperText>{errors.endDate}</HelperText>
            ) : null}
            <Button
              mode="contained"
              color={colors.secondary}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
      <ActivityIndicator animating={isSubmitting} size="large" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default EventForm;
