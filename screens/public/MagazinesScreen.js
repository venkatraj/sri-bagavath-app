import React, { useState, useEffect, useCallback } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  ActivityIndicator,
  Card,
  Button,
  FAB,
  Snackbar,
  HelperText,
  Title,
} from 'react-native-paper';

import defaultStyles from '../../theme/defaultStyles';
import MagazineItem from '../../components/MagazineItem';
import MagazineFilters from '../../components/MagazineFilters';
import { fetchMagazines, deleteMagazine } from '../../store/actions/magazines';

const MagazinesScreen = (props) => {
  const { navigation } = props;
  const [selectedYear, setSelectedYear] = useState('');
  const allMagazines = useSelector((state) => state.magazines);
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;
  const [magazines, setMagazines] = useState(allMagazines);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const loadMagazines = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(fetchMagazines());
      setIsRefreshing(false);
    } catch (e) {
      setError(e.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadMagazines);
    return unsubscribe;
  }, [loadMagazines]);

  useEffect(() => {
    setIsLoading(true);
    loadMagazines().then(() => {
      setIsLoading(false);
      setMagazines(allMagazines);
    });
    onSelect('');
  }, []); // [loadMagazines]

  const onSelect = (selectedYear) => {
    console.log('working', selectedYear);
    if (selectedYear) {
      const filteredMagazines = allMagazines.filter((magazine) => {
        const [day, month, year] = magazine.date.split('-');
        return (
          new Date(`${year}-${month}-${day}`).getFullYear() === selectedYear
        );
      });
      setMagazines(filteredMagazines);
    } else {
      setMagazines(allMagazines);
    }
    setSelectedYear(selectedYear);
  };

  const onDownload = (msg) => {
    setVisibility(true);
    setSnackbarMsg(msg);
  };

  const onCreateAndEdit = (id = '') => {
    navigation.navigate('Magazines', {
      screen: 'MagazineForm',
      params: { id },
    });
  };

  const onDelete = (id) => {
    Alert.alert(
      'Are you sure?',
      "Magazine will be deleted. This can't be undone!",
      [
        {
          text: 'OK',
          onPress: () => {
            dispatch(deleteMagazine(id));
            setVisibility(true);
            setSnackbarMsg('deleted!');
          },
        },
        {
          text: 'Cancel',
        },
      ]
    );
  };

  const renderMagazine = (itemData) => {
    return (
      <MagazineItem
        magazineData={itemData.item}
        onDelete={onDelete}
        onEdit={onCreateAndEdit}
        onDownload={onDownload}
      />
    );
  };

  if (error) {
    return (
      <View style={defaultStyles.centered}>
        <HelperText>{error}</HelperText>
        <Button onPress={loadMagazines}>Try again!</Button>
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

  if (!isLoading && magazines.length === 0) {
    return (
      <View style={defaultStyles.occupy}>
        <MagazineFilters selectedYear={selectedYear} onSelect={onSelect} />
        <View style={defaultStyles.centered}>
          <HelperText>No magazines found!. </HelperText>
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
  }

  return (
    <View style={defaultStyles.occupy}>
      <View style={defaultStyles.bottomSpace}>
        <FlatList
          onRefresh={loadMagazines}
          refreshing={isRefreshing}
          data={magazines}
          renderItem={renderMagazine}
          ListHeaderComponent={() => (
            <MagazineFilters selectedYear={selectedYear} onSelect={onSelect} />
          )}
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
          Magazine {snackbarMsg}.
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

export default MagazinesScreen;
