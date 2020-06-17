import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  ActivityIndicator,
  Button,
  Card,
  FAB,
  Snackbar,
  HelperText,
  Title,
} from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import EBookItem from '../../components/EBookItem';
import { fetchEBooks } from '../../store/actions/ebooks';

const EBooksScreen = (props) => {
  const { navigation } = props;
  const ebooks = useSelector((state) => state.ebooks);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadEBooks = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(fetchEBooks());
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadEBooks);
    return unsubscribe;
  }, [loadEBooks]);

  useEffect(() => {
    loadEBooks();
  }, [loadEBooks]);

  const renderEBook = (itemData) => {
    const onDownload = (msg) => {
      setVisibility(true);
      setSnackbarMsg(msg);
    };

    return <EBookItem ebookData={itemData.item} onDownload={onDownload} />;
  };

  if (error) {
    return (
      <View style={defaultStyles.centered}>
        <HelperText>{error}</HelperText>
        <Button onPress={loadEBooks}>Try again!</Button>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={defaultStyles.centered}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  if (!isLoading && ebooks.length === 0) {
    return (
      <View style={defaultStyles.centered}>
        <HelperText>No ebooks found!</HelperText>
      </View>
    );
  }

  return (
    <View style={defaultStyles.occupy}>
      <FlatList data={ebooks} renderItem={renderEBook} />
      <Snackbar
        visible={visibility}
        onDismiss={() => setVisibility(false)}
        action={{
          label: 'Okay',
          duration: 3000,
          onPress: () => {
            // Do something
          },
        }}
      >
        EBook {snackbarMsg}.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EBooksScreen;
