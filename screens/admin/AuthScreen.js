import React, { useState, useEffect } from 'react';
import { Keyboard, View, StyleSheet, Alert } from 'react-native';
import {
  ActivityIndicator,
  Button,
  TextInput,
  HelperText,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { login } from '../../store/actions/auth';

const AuthScreen = (props) => {
  const { navigation } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    setIsSubmitting(true);
    setError(null);
    try {
      await dispatch(login(values));
      navigation.navigate('Admin');
    } catch (e) {
      setIsSubmitting(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().min(5).required(),
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
              label="Email"
              id="email"
              name="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email ? (
              <HelperText>{errors.email}</HelperText>
            ) : null}
            <TextInput
              label="Password"
              id="password"
              name="password"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <HelperText>{errors.password}</HelperText>
            ) : null}
            <Button disabled={!isValid} onPress={handleSubmit}>
              Login
            </Button>
          </View>
        )}
      </Formik>
      <ActivityIndicator animating={isSubmitting} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
