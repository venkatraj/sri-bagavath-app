import React, { useState, useEffect, useCallback } from 'react';
import { Alert, View, FlatList, StyleSheet } from 'react-native';
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
import { fetchEBooks, deleteEBook } from '../../store/actions/ebooks';

const EBooksScreen = (props) => {
  const { navigation } = props;
  const ebooks = useSelector((state) => state.ebooks);
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;

  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const loadEBooks = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(fetchEBooks());
      setIsRefreshing(false);
    } catch (e) {
      setError(e.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadEBooks);
    return unsubscribe;
  }, [loadEBooks]);

  useEffect(() => {
    setIsLoading(true);
    loadEBooks().then(() => setIsLoading(false));
  }, [loadEBooks]);

  const onCreateAndEdit = (id = '') => {
    console.log(id);
    navigation.navigate('EBooks', {
      screen: 'EBookForm',
      params: { id },
    });
  };

  const onDelete = (id) => {
    Alert.alert(
      'Are you sure?',
      "EBook will be deleted. This can't be undone!",
      [
        {
          text: 'OK',
          onPress: () => {
            dispatch(deleteEBook(id));
            setVisibility(true);
            setSnackbarMsg('deleted');
          },
        },
        {
          text: 'Cancel',
        },
      ]
    );
  };

  const renderEBook = (itemData) => {
    const onDownload = (msg) => {
      setVisibility(true);
      setSnackbarMsg(msg);
    };

    return (
      <EBookItem
        ebookData={itemData.item}
        onDownload={onDownload}
        onEdit={onCreateAndEdit}
        onDelete={onDelete}
      />
    );
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
        {isLoggedIn && (
          <FAB
            style={defaultStyles.fab}
            medium
            icon="plus"
            onPress={() => onCreateAndEdit()}
          />
        )}
      </View>
    );
  }

  return (
    <View style={defaultStyles.occupy}>
      <View style={defaultStyles.bottomSpace}>
        <FlatList
          onRefresh={loadEBooks}
          refreshing={isRefreshing}
          data={ebooks}
          renderItem={renderEBook}
        />
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
      {isLoggedIn && (
        <FAB
          style={defaultStyles.fab}
          medium
          icon="plus"
          onPress={() => onCreateAndEdit()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default EBooksScreen;
