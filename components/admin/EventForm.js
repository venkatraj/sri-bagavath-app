import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput, HelperText, Switch } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';

const EventForm = (props) => {
  return (
    <Formik
      initialValues={{ eventName: '', host: '', online: false, venue: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={yup.object().shape({
        eventName: yup.string().min(5).required(),
        host: yup.string().min(5).required(),
        venue: yup.string(),
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
            label="Name"
            id="eventName"
            name="eventName"
            onChangeText={handleChange('eventName')}
            onBlur={handleBlur('eventName')}
            value={values.name}
          />
          {touched.eventName && errors.eventName ? (
            <HelperText>{errors.eventName}</HelperText>
          ) : null}
          <TextInput
            label="Host"
            id="host"
            name="host"
            onChangeText={handleChange('host')}
            onBlur={handleBlur('host')}
            value={values.host}
          />
          <Fragment>
            <Text>Online?</Text>
            <Switch
              id="mode"
              name="mode"
              value={values.online}
              onValueChange={handleChange('mode')}
            />
          </Fragment>
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
          <Button disabled={!isValid} onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default EventForm;
