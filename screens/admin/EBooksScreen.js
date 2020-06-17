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
import { fetchEBooks, deleteEBook } from '../../store/actions/ebooks';

const EBooksAdminScreen = (props) => {
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
    loadEBooks();
  }, [loadEBooks]);

  const onPress = (id = null) => {
    navigation.push('EBooksAdmin', {
      screen: 'EBook',
      params: { id },
    });
  };

  const renderEBook = (itemData) => {
    const { id } = itemData.item;

    const onDelete = () => {
      dispatch(deleteEBook(id));
      setVisibility(true);
      setSnackbarMsg('deleted!');
    };

    const onDownload = (msg) => {
      setVisibility(true);
      setSnackbarMsg(msg);
    };

    return (
      <View>
        <EBookItem ebookData={itemData.item} onDownload={onDownload} />
        <Card style={defaultStyles.btnContainer}>
          <Card.Actions style={defaultStyles.rowSpaced}>
            <Button onPress={onDelete}>Delete</Button>
            <Button onPress={() => onPress(id)}>Edit</Button>
          </Card.Actions>
        </Card>
      </View>
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
        <HelperText>No ebooks found!. Add some!!</HelperText>
        <FAB
          style={defaultStyles.fab}
          medium
          icon="plus"
          onPress={() => onPress()}
        />
      </View>
    );
  }

  return (
    <View style={defaultStyles.occupy}>
      <View>
        <Title style={defaultStyles.title}>EBooks</Title>
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

      <FAB
        style={defaultStyles.fab}
        medium
        icon="plus"
        onPress={() => onPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EBooksAdminScreen;
