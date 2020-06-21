import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Card, Button, Title, Paragraph, Snackbar } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import moment from 'moment';

import defaultStyles from '../theme/defaultStyles';

const MagazineItem = (props) => {
  const { onDownload, onEdit, onDelete } = props;
  const { id, date, fileName, downloadUrl } = props.magazineData;
  const [day, month, year] = date.split('-');
  const user = useSelector((state) => state.user);
  const { isLoggedIn } = user;

  const downloadMagazine = async () => {
    try {
      const { status, uri } = await FileSystem.downloadAsync(
        downloadUrl,
        FileSystem.documentDirectory + `${fileName}` // `${fileName}.pdf`
      );
      if (status === 200) {
        let permission = await MediaLibrary.getPermissionsAsync();
        if (!permission.granted) {
          permission = await MediaLibrary.requestPermissionsAsync();
        }
        if (permission.granted) {
          const asset = await MediaLibrary.createAssetAsync(uri);
          const album = await MediaLibrary.createAlbumAsync(
            'Sri Bagavath',
            asset
          );
          onDownload('downloaded!');
        } else {
          onDownload('not downloaded!');
        }
      } else {
        onDownload('not downloaded!');
        throw Error('File download not successful');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card style={defaultStyles.item}>
      <Card.Content>
        <Title style={defaultStyles.centeredText}>
          {moment(`${year}-${month}-${day}`).format('MMMM YYYY')}
        </Title>
      </Card.Content>
      <Card.Actions style={defaultStyles.centered}>
        <Button onPress={downloadMagazine}>Download</Button>
      </Card.Actions>
      {isLoggedIn && (
        <Card.Actions style={defaultStyles.rowSpaced}>
          <Button onPress={() => onDelete(id)}>Delete</Button>
          <Button onPress={() => onEdit(id)}>Edit</Button>
        </Card.Actions>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({});

export default MagazineItem;
