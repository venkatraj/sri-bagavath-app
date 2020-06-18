import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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
import { fetchMagazines } from '../../store/actions/magazines';

const MagazinesScreen = (props) => {
  const { navigation } = props;
  const [selectedYear, setSelectedYear] = useState('');
  const allMagazines = useSelector((state) => state.magazines);
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
    loadMagazines().then(() => setIsLoading(false));
  }, [loadMagazines]);

  const onSelect = (selectedYear) => {
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

  const renderMagazine = (itemData) => {
    const { id } = itemData.item;

    const onDownload = (msg) => {
      setVisibility(true);
      setSnackbarMsg(msg);
    };
    return (
      <MagazineItem magazineData={itemData.item} onDownload={onDownload} />
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
      </View>
    );
  }

  return (
    <View style={defaultStyles.bottomSpace}>
      <FlatList
        onRefresh={loadMagazines}
        refreshing={isRefreshing}
        data={magazines}
        renderItem={renderMagazine}
        numColumns={2}
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
  );
};

const styles = StyleSheet.create({});

export default MagazinesScreen;
